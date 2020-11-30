import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { finalize } from 'rxjs/operators';
import { CategoryService } from '../../../service';
import { PageRequest } from '../../../lib/model/page-request.model';
import { PagedApiResponse } from '../../../lib/model/paged-api-response.model';
import { Category } from '../../../model';
import { sortTableFn } from '../../../utils/table.util';

@Component({
  templateUrl: './table-category.component.html'
})
export class TableCategoryComponent implements OnInit {

  ColumnMode = ColumnMode;
  expanded: boolean = false;
  data: PagedApiResponse<Category>;
  loadingIndicator: boolean;
  page: PageRequest = new PageRequest();
  sortTableFn = sortTableFn;
  loading: boolean = false;
  row = [];

  constructor(private categoryService: CategoryService) {}

  get offset(): number {
    return !!(this.data && this.data.pages) ? this.data.pages : 0;
  }

  get rows(): Array<Category> {
    return !!(this.data && this.data.docs) ? this.data.docs : [];
  }

  get totalElements(): number {
    return !!(this.data && this.data.total) ? this.data.total : 0;
  }

  ngOnInit() {
    this.getCategory();
  }

  getCategory(pageNumber: number = 1) {
    this.loadingIndicator = true;
    this.page.page = pageNumber;

    this.categoryService
      .getTableRows(this.page)
      .pipe(
        finalize(() => this.loadingIndicator = false)
      )
      .subscribe(data => this.data = data);
  }

  onSort(event) {
    this.loading = true;
    setTimeout(() => {
      let rows = [...this.rows];
      const sort = event.sorts[0];
      rows.sort((a, b) => {
        return a[sort.prop].localeCompare(b[sort.prop]) * (sort.dir === 'desc' ? -1 : 1);
      });

      rows= rows;
      this.loading = false;
    }, 1000);
  }

  deleted(id: string){
    this.categoryService.delete(id).subscribe(()=>{
      this.getCategory();
    })
  }
}