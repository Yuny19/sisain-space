import { HttpParams } from '@angular/common/http';

export class PageRequest {

  constructor(
    public limit: number = 10,
    public page: number = 1
  ) {}

  get requestParam(): HttpParams {
    return new HttpParams(
      {
        fromObject: {
          page: `${this.page}`,
          limit: `${this.limit}`
        }
      }
    );
  }
}
