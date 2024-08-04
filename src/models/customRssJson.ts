import { RssJsonChannel, RssJsonItem, RssObject } from "./rssJson";

export interface CustomRssJson {
  rss: CustomRssObject;
}

interface CustomRssJsonChannel extends RssJsonChannel {
  item: CustomRssJsonItem[];
}

export interface CustomRssJsonItem extends RssJsonItem {
  "kotuko:wordleScore"?: number;
}

interface CustomRssObject extends RssObject {
  "@_xmlns:kotuko": string;
  channel: CustomRssJsonChannel;
}
