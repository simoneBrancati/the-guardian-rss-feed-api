import express, { Express } from "express";
import theGuardianRouter from "./routes/theGuardianRouter";

const app: Express = express();

app.use("/", theGuardianRouter);

export default app;
