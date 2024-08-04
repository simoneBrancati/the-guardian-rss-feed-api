export interface RssJson {
  rss: {
    channel: RssJsonChannel;
  };
}

interface RssJsonChannel {
  title: string;
  link: string;
  description: string;
  language?: string;
  copyright?: string;
  managingEditor?: string;
  webMaster?: string;
  pubDate?: string;
  docs?: string;
  item: RssJsonItem[];
}

export interface RssJsonItem {
  title?: string;
  link?: string;
  description?: string;
  language?: string;
  pubDate?: string;
  guid?: string;
  "kotuko:wordleScore"?: number;
}
