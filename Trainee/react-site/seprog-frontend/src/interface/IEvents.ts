export default interface IEvents {
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
  time: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}
