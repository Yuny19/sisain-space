import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { finalize } from 'rxjs/operators';
import { Transaction } from '../../../model';
import { TransactionService } from '../../../service/transaction.service';
import { PageRequest } from '../../../lib/model/page-request.model';
import { PagedApiResponse } from '../../../lib/model/paged-api-response.model';
import { sortTableFn } from '../../../utils/table.util';

@Component({
  templateUrl: './table-transaction.component.html'
})
export class TableTransactionComponent implements OnInit {

  ColumnMode = ColumnMode;
  expanded: boolean = false;
  data: PagedApiResponse<Transaction>;
  loadingIndicator: boolean;
  page: PageRequest = new PageRequest();
  sortTableFn = sortTableFn;

  constructor(private transactionService: TransactionService) {}

  get offset(): number {
    return !!(this.data && this.data.pages) ? this.data.pages : 0;
  }

  get rows(): Array<Transaction> {
    return !!(this.data && this.data.docs) ? this.data.docs : [];
  }

  get totalElements(): number {
    return !!(this.data && this.data.total) ? this.data.total : 0;
  }

  ngOnInit() {
    this.getTransaction();
  }

  getTransaction(pageNumber: number = 1) {
    this.loadingIndicator = true;
    this.page.page = pageNumber;

    this.transactionService
      .getTableRows(this.page)
      .pipe(
        finalize(() => this.loadingIndicator = false)
      )
      .subscribe(data => this.data = data);
  }
}