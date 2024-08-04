export interface RssObject {
  // @_ is the attribute name prefix used to convert the key to an xml attribute for the upper level xml tag
  "@_version": string;
  channel: RssJsonChannel;
}

export interface RssJsonChannel {
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
  pubDate?: string;
  guid?: string;
}
