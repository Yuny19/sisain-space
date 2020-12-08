import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { NameInterface } from 'src/app/store/model/name.model';
import {Store} from '@ngrx/store'
import { SearchModalComponent } from '../search-modal/search-modal.component';
import { reduceName } from 'src/app/store/lib/name.reducer';

@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

    modalRef: BsModalRef | null;
    name: string;
    name$: Observable<NameInterface>;

    constructor(private bsModalService: BsModalService,
        private router: Router,
        private store: Store<{ nameReducers: NameInterface }>
        ){
            this.name$ = this.store.select('nameReducers');
        }
    ngOnInit() {
        this.name$.subscribe(async (state: NameInterface) => {
            this.name =  state.name;
        })        
    }

    openModalSearch(){
        this.modalRef = this.bsModalService.show(SearchModalComponent, { class: 'modal-lg' });
    }

    logOut() {
        localStorage.clear();
        this.store.dispatch(reduceName(null));
        this.router.navigateByUrl('/home');
    }
}