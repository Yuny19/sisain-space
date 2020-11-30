import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { finalize } from 'rxjs/operators';
import { PageRequest } from '../../../lib/model/page-request.model';
import { PagedApiResponse } from '../../../lib/model/paged-api-response.model';
import { User } from '../../../model';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html'
})
export class DataTableComponent implements OnInit {

  ColumnMode = ColumnMode;
  expanded: boolean = false;
  data: PagedApiResponse<User>;
  loadingIndicator: boolean;
  page: PageRequest = new PageRequest();
  loading: boolean = false;

  constructor(private userService: UserService) {}

  get offset(): number {
    return !!(this.data && this.data.pages) ? this.data.pages : 0;
  }

  get rows(): Array<User> {
    return !!(this.data && this.data.docs) ? this.data.docs : [];
  }

  get totalElements(): number {
    return !!(this.data && this.data.total) ? this.data.total : 0;
  }

  ngOnInit() {
    this.getUser();
  }

  getUser(pageNumber: number = 1) {
    this.loadingIndicator = true;
    this.page.page = pageNumber;

    this.userService
      .getTableRows(this.page)
      .pipe(
        finalize(() => this.loadingIndicator = false)
      )
      .subscribe(data => this.data = data);
  }

  onSort(event) {
    console.log('Sort Event', event);
    this.loading = true;
    setTimeout(() => {
      const rows = [...this.rows];
      const sort = event.sorts[0];
      rows.sort((a, b) => {
        return a[sort.prop].localeCompare(b[sort.prop]) * (sort.dir === 'desc' ? -1 : 1);
      });

      this.data.docs= rows;
      this.loading = false;
    }, 500);
  }
}