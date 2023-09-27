import cors from "cors";
import express, { Express, Request, Response } from "express";

const app: Express = express();

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
  console.log(req);
  res.status(200).json({ message: "Hello World" });
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
