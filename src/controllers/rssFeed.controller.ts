import { generateRss } from "../services/rssGeneration.service";
import { getSectionFromTheGuardian } from "../services/theGuardianApi.service";
import { NextFunction, Request, Response } from "express";

export const getSection = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response | null> => {
  const { section } = req.params;
  try {
    const rss = await createRssFeed(section);
    res.setHeader("Content-Type", "application/xml").send(rss);

    return res;
  } catch (err) {
    next(err);

    return null;
  }
};

const createRssFeed = async (sectionKey: string): Promise<string> => {
  const data = await getSectionFromTheGuardian(sectionKey);
  const rss = generateRss(data.section, data.results);

  return rss;
};
