import { NextFunction, Request, Response } from "express";
import { validateSectionKey } from "../validation/rssService.validation";

export const theGuardianSectionValidator = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { section } = req.params;
  if (!validateSectionKey(section)) {
    return res
      .status(400)
      .send({ message: `Requested section "${section}" is invalid` });
  }

  next();
};
