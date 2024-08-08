import {
  getString as getCachedString,
  setString as setStringInCache,
} from "../ports/cache";
import { generateRss } from "../services/rssGeneration.service";
import { getSectionFromTheGuardian } from "../services/theGuardianApi.service";
import { NextFunction, Request, Response } from "express";
import logger from "../utils/logger";
import { cacheTTLInSeconds } from "../environment";

export const getSection = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response | null> => {
  const { section } = req.params;
  try {
    const rss = await getRssFeed(section);
    res.setHeader("Content-Type", "application/xml").send(rss);

    return res;
  } catch (err) {
    next(err);

    return null;
  }
};

const getRssFeed = async (sectionKey: string): Promise<string> => {
  // Get rss feed from cache
  let rss = await getCachedString(sectionKey);
  if (rss) {
    logger.debug(`Rss for section '${sectionKey}' found in cache`);
    return rss;
  }

  // If rss feed is not cached, create it
  rss = await createRssFeed(sectionKey);

  // Cache rss feed and return it
  const cacheSuccess = await setStringInCache(
    sectionKey,
    rss,
    cacheTTLInSeconds,
  );
  if (!cacheSuccess) {
    logger.warn("Failed to cache rss feed");
  } else {
    logger.debug(`Rss for section '${sectionKey}' cached successfully`);
  }

  return rss;
};

const createRssFeed = async (sectionKey: string): Promise<string> => {
  const data = await getSectionFromTheGuardian(sectionKey);
  const rss = generateRss(data.section, data.results);

  return rss;
};
