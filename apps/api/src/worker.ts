import { createRedisInstance } from "@pulse/redis";
import {
  Program,
  AnchorProvider,
  Wallet,
  BorshCoder,
  EventParser,
} from "@coral-xyz/anchor";
import { web3 } from "@coral-xyz/anchor";
import dotenv from "dotenv";
import { IDL } from "@pulse/types";
// import { writeFileSync } from "fs";

dotenv.config();

const redis = createRedisInstance({
  port: 42573,
  host: process.env.REDIS_HOST,
  password: process.env.REDIS_PASSWORD,
  tls: {
    rejectUnauthorized: false,
  },
});

const STREAM_NAME = "cubik_events";

async function main() {
  let lastId = "$";

  const keypair = web3.Keypair.generate();
  const wallet = new Wallet(keypair);
  const connection = new web3.Connection(
    "https://devnet.helius-rpc.com/?api-key=d17f1226-b554-443e-978e-b41d01825ea4",
    "confirmed",
  );
  const PROGRAM_ID = new web3.PublicKey(
    "H8cQEqKuCU7uK2211tdEJ8pPFiT8L114Dj1d36LqeE5i",
  );
  const provider = new AnchorProvider(connection, wallet, {});
  const cubikProgram = new Program(IDL, PROGRAM_ID, provider);
  const coder = new BorshCoder(IDL);
  const eventParser = new EventParser(PROGRAM_ID, new BorshCoder(IDL));

  while (true) {
    try {
      const streamData = await redis.xread(
        "BLOCK",
        0,
        "STREAMS",
        STREAM_NAME,
        lastId,
      );

      if (streamData) {
        for (const stream of streamData) {
          try {
            const messages = stream[1];
            for (const message of messages) {
              try {
                const messageId = message[0];
                const messageData = JSON.parse(message[1][1]);

                // Loop over all instructions
                const events = eventParser.parseLogs(
                  messageData[0].meta.logMessages,
                );

                for (const event of events) {
                  console.log("event:\n", event);
                }

                for (const instruction of messageData[0].transaction.message
                  .instructions) {
                  const decodedData = coder.instruction.decode(
                    instruction.data,
                    "base58",
                  );

                  if (!decodedData) {
                    continue;
                  }

                  const accountMetas = instruction.accounts.map(
                    (account: any) => {
                      return {
                        pubkey: new web3.PublicKey(account),
                      };
                    },
                  );
                  const decodedAccountData = coder.instruction.format(
                    decodedData,
                    accountMetas,
                  ) as any;
                  if (!decodedAccountData) {
                    continue;
                  }
                  console.log("decoded data:", decodedData);
                  console.log("decoded account data:", decodedAccountData);
                }
                // Acknowledge the message in the Redis Stream
                await redis.xack(STREAM_NAME, "my_group", messageId);
                lastId = messageId;
              } catch (error: any) {
                console.error(
                  "Error occurred while processing message",
                  error.stack,
                );
              }
            }
          } catch (error: any) {
            console.error(
              "Error occurred while processing stream",
              error.stack,
            );
          }
        }
      }
    } catch (error: any) {
      console.error("Error occurred while processing stream data", error.stack);
    }
  }
}

main().catch((error) => {
  console.error("Uncaught error in main", error.stack);
});
