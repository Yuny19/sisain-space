import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { finalize } from 'rxjs/operators';
import { ExpeditionService } from '../../../service';
import { PageRequest } from '../../../lib/model/page-request.model';
import { PagedApiResponse } from '../../../lib/model/paged-api-response.model';
import { Expedition } from '../../../model';
import { sortTableFn } from '../../../utils/table.util';

@Component({
  templateUrl: './table-expedition.component.html'
})
export class TableExpeditionComponent implements OnInit {

  ColumnMode = ColumnMode;
  expanded: boolean = false;
  data: PagedApiResponse<Expedition>;
  loadingIndicator: boolean;
  page: PageRequest = new PageRequest();
  sortTableFn = sortTableFn;
  loading: boolean = false;
  row = [];

  constructor(private expeditionService: ExpeditionService) {}

  get offset(): number {
    return !!(this.data && this.data.pages) ? this.data.pages : 0;
  }

  get rows(): Array<Expedition> {
    return !!(this.data && this.data.docs) ? this.data.docs : [];
  }

  get totalElements(): number {
    return !!(this.data && this.data.total) ? this.data.total : 0;
  }

  ngOnInit() {
    this.getExpedition();
  }

  getExpedition(pageNumber: number = 1) {
    this.loadingIndicator = true;
    this.page.page = pageNumber;

    this.expeditionService
      .getTableRows(this.page)
      .pipe(
        finalize(() => this.loadingIndicator = false)
      )
      .subscribe(data => this.data = data);
  }

  onSort(event) {
    // event was triggered, start sort sequence
    console.log('Sort Event', event);
    this.loading = true;
    // emulate a server request with a timeout
    setTimeout(() => {
      let rows = [...this.rows];
      // this is only for demo purposes, normally
      // your server would return the result for
      // you and you would just set the rows prop
      const sort = event.sorts[0];
      rows.sort((a, b) => {
        return a[sort.prop].localeCompare(b[sort.prop]) * (sort.dir === 'desc' ? -1 : 1);
      });

      rows= rows;
      this.loading = false;
    }, 1000);
  }

  deleted(id: string){
    this.expeditionService.delete(id).subscribe(()=>{
      this.getExpedition();
    })
  }
}