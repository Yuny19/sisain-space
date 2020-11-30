import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { finalize } from 'rxjs/operators';
import { ProductService } from '../../../service/product.service';
import { PageRequest } from '../../../lib/model/page-request.model';
import { PagedApiResponse } from '../../../lib/model/paged-api-response.model';
import { Product } from '../../../model';
import { sortTableFn } from '../../../utils/table.util';

@Component({
  templateUrl: './table-product.component.html'
})
export class TableProductComponent implements OnInit {

  ColumnMode = ColumnMode;
  expanded: boolean = false;
  data: PagedApiResponse<Product>;
  loadingIndicator: boolean;
  page: PageRequest = new PageRequest();
  sortTableFn = sortTableFn;

  constructor(private productService: ProductService) {}

  get offset(): number {
    return !!(this.data && this.data.pages) ? this.data.pages : 0;
  }

  get rows(): Array<Product> {
    return !!(this.data && this.data.docs) ? this.data.docs : [];
  }

  get totalElements(): number {
    return !!(this.data && this.data.total) ? this.data.total : 0;
  }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(pageNumber: number = 1) {
    this.loadingIndicator = true;
    this.page.page = pageNumber;

    this.productService
      .getTableRows(this.page)
      .pipe(
        finalize(() => this.loadingIndicator = false)
      )
      .subscribe(data => this.data = data);
  }

  deleted(id: string){
    this.productService.delete(id).subscribe(()=>{
      this.getProduct();
    })
  }
}