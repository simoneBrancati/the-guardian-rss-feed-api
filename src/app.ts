import express, { Express } from "express";
import theGuardianRssRouter from "./routes/theGuardianRss.router";
import rssErrorHandler from "./middlewares/rssErrorHandler";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import loggingMiddleware from "./middlewares/logger";
import logger from "./utils/logger";
import { appPort } from "./environment";

const app: Express = express();

// Custom logger
app.use(loggingMiddleware);

app.use("/rss/", theGuardianRssRouter);

// Error Handler for theGuardiansRouter
app.use("/rss/", rssErrorHandler);

// Generic error handler
app.use(globalErrorHandler);

app.listen(appPort, () => {
  logger.info(`Listening on port ${appPort}`);
});

export default app;
