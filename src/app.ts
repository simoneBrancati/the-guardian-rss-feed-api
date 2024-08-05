import "dotenv/config";
import express, { Express } from "express";
import theGuardianRssRouter from "./routes/theGuardianRss.router";

const app: Express = express();

app.use("/", theGuardianRssRouter);

const port = 3000;

app.listen(port, () => {
  console.log("Listening on port", port);
});

export default app;
