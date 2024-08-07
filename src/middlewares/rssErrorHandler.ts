import { NextFunction, Request, Response } from "express";
import NotFoundError from "../errors/NotFoundError";
import ServerError from "../errors/ServerError";
import logger from "../utils/logger";

const rssErrorHandler = (
  err: Error,
  _: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof NotFoundError) {
    return res.status(404).send({ error: err.message });
  }

  if (err instanceof ServerError) {
    logger.error(err.stack);

    return res.status(500).send({ error: err.message });
  }

  logger.error(err.stack);
  res.status(500).send({ error: "Some error occurred" });

  next();
};

export default rssErrorHandler;
