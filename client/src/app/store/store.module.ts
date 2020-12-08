import { NgModule } from "@angular/core";
import {StoreModule} from "@ngrx/store";
import { reducers } from './store';

@NgModule({
    imports: [
        StoreModule.forRoot(reducers)
    ]
})

export class AppStoreModule { }