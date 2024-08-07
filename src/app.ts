import "dotenv/config";
import express, { Express } from "express";
import theGuardianRssRouter from "./routes/theGuardianRss.router";
import rssErrorHandler from "./middlewares/rssErrorHandler";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import logger from "./middlewares/logger";

const app: Express = express();

// Custom logger
app.use(logger);

app.use("/rss/", theGuardianRssRouter);

// Error Handler for theGuardiansRouter
app.use("/rss/", rssErrorHandler);

// Generic error handler
app.use(globalErrorHandler);

const port = 3000;

app.listen(port, () => {
  console.log("Listening on port", port);
});

export default app;
