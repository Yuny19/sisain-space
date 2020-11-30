
export interface PagedApiResponse<T> {
  docs: Array<T>;
  limit: number;
  total: number;
  page: number;
  pages: number;
}
