import cors from "cors";
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { EventEmitter } from "stream";
import { createRedisInstance } from "@pulse/redis";
import type { WebhookInput } from "@pulse/types";
// import { writeFileSync } from "fs";

const app: Express = express();
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

const STREAM_NAME = "cubik_events";

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
  // console.log("req.body >>", JSON.stringify(req.body));
  const data = req.body;

  // const object: WebhookInput = {
  //   timestamp: req.body[0].timestamp,
  //   sig: req.body[0].signature,
  //   type: "HELIUS",
  // };

  // await redis.lpush("helius", JSON.stringify(object));
  console.log("data >>", data[0]);

  await redis.xadd(STREAM_NAME, "*", "data", JSON.stringify(data));

  res.status(200).send("OK");
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
  console.log("info", "Server is running on Port: 8080");
});
