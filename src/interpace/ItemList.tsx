export interface IProps {
  data: IWord[];
  setTarget: any;
}

export interface IWord {
  contentDetails: object;
  etag: string;
  id: string;
  kind: string;
  snippet: ISnippet;
  statistics: object;
}

export interface ISnippet {
  categoryId: string;
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: string;
  localized: object;
  publishedAt: string;
  tags: Array<string>;
  thumbnails: Ithumbnails;
  title: string;
}

export interface Ithumbnails {
  default: IDefault;
  high: IHigh;
  maxres: IMaxres;
  medium: IMedium;
  standard: IStandard;
}

export interface IDefault {
  height: number;
  url: string;
  width: number;
}

export interface IMaxres {
  height: number;
  url: string;
  width: number;
}

export interface IHigh {
  height: number;
  url: string;
  width: number;
}

export interface IMedium {
  height: number;
  url: string;
  width: number;
}

export interface IStandard {
  height: number;
  url: string;
  width: number;
}
