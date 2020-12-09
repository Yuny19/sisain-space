import { NameInterface } from '../model/name.model';

const ADD_DATA = 'add_data';
const REDUCE_DATA = 'reduce_data';

export const initialState = {
    name: null
}

export function nameReducers(state: NameInterface = initialState, action) {
    switch (action.type) {
        case ADD_DATA:
            return {
                ...state,
                name: action.payload
            }
        case REDUCE_DATA:
            return {
                ...state,
                name: null
            }
        default:
            return state
    }
}

export const addName = (payload) => ({
    type: ADD_DATA,
    payload: payload
});

export const reduceName = (payload) =>({
    type: REDUCE_DATA,
    payload: payload
});