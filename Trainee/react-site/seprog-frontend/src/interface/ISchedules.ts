import IEvents from "./IEvents";

export default interface ISchedules {
  data: Datum[];
  meta: Meta;
}

interface Meta {
  pagination: Pagination;
}

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

interface Datum {
  id: number;
  attributes: Attributes;
}

interface Attributes {
  tabDay: string;
  organizer: string;
  theme: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  contentImg: ContentImg;
  eventos: IEvents;
}

interface ContentImg {
  data: Data;
}

interface Data {
  id: number;
  attributes: Attributes2;
}

interface Attributes2 {
  name: string;
  alternativeText?: any;
  caption?: any;
  width: number;
  height: number;
  formats?: any;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: any;
  provider: string;
  provider_metadata?: any;
  createdAt: string;
  updatedAt: string;
}
