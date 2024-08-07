import "dotenv/config";
import express, { Express } from "express";
import theGuardianRssRouter from "./routes/theGuardianRss.router";
import rssErrorHandler from "./middlewares/rssErrorHandler";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import loggingMiddleware from "./middlewares/logger";
import logger from "./utils/logger";

const app: Express = express();

// Custom logger
app.use(loggingMiddleware);

app.use("/rss/", theGuardianRssRouter);

// Error Handler for theGuardiansRouter
app.use("/rss/", rssErrorHandler);

// Generic error handler
app.use(globalErrorHandler);

const port = 3000;

app.listen(port, () => {
  logger.info("Listening on port", port);
});

export default app;
