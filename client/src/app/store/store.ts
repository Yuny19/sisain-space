import { ActionReducerMap } from '@ngrx/store';
import { NameInterface } from './model/name.model';
import { nameReducers } from './lib/name.reducer'

interface ReducerInterface {
    nameReducers: NameInterface
}

export const reducers: ActionReducerMap<ReducerInterface> = {
    nameReducers
}