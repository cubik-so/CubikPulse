import cors from "cors";
import express, { Express, Request, Response } from "express";
import { createRedisInstance } from "@pulse/redis";
const app: Express = express();
import dotenv from "dotenv";
import { EventEmitter } from "stream";
EventEmitter.defaultMaxListeners = 100;

dotenv.config();

const redis = createRedisInstance({
  port: 42573,
  host: process.env.REDIS_HOST,
  password: process.env.REDIS_PASSWORD,
  tls: {
    rejectUnauthorized: false,
  },
});

app.use(
  cors({
    // origin is given a array if we want to have multiple origins later
    origin: "*",
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/hook", async (req: Request, res: Response) => {
  try {
    const ixName = req.body[0].meta.logMessages[1].split("Instruction:")[1]; // TODO: can not be determined for all transactions, need a new way to get the name
    const object = {
      timestamp: req.body[0].blockTime,
      sig: req.body[0].transaction.signatures[0],
      name: ixName ? ixName.trim() : "",
      type: "HELIUS",
    };

    redis.on("error", (error) => {
      console.log("redis error >>", error);
    });

    await redis.lpush("helius", JSON.stringify(object));

    res.status(200);
  } catch (error) {
    console.log("error >>", error);
    res.status(500).send("Internal Server Error");
  }
});

app.all("*", (req: Request, res: Response) => {
  res.status(404);
  if (req.accepts("json")) {
    res.json({ error: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

app.listen(8080, () => {
  console.log("info", `Server is running on Port: 8080`);
});
