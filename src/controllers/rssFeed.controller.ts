import { generateRss } from "../services/rssGeneration.service";
import { getSectionFromTheGuardian } from "../services/theGuardianApi.service";
import { Request, Response } from "express";

export const getSection = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const { section } = req.params;
  const rss = await createRssFeed(section);

  res.setHeader("Content-Type", "application/xml").send(rss);

  return res;
};

const createRssFeed = async (sectionKey: string): Promise<string> => {
  const data = await getSectionFromTheGuardian(sectionKey);
  const rss = generateRss(data.section, data.results);

  return rss;
};
