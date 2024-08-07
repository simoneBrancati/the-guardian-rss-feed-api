import { NextFunction, Request, Response } from "express";
import NotFoundError from "../errors/NotFoundError";
import ServerError from "../errors/ServerError";

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
    return res.status(500).send({ error: err.message });
  }

  res.status(500).send({ error: "Some error occurred" });

  next();
};

export default rssErrorHandler;
