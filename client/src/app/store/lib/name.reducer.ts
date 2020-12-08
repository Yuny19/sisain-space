import { NameInterface } from '../model/name.model';

const ADD_NAME = 'add_name';
const REDUCE_NAME = 'reduce_name';

export const initialState = {
    name: null
}

export function nameReducers(state: NameInterface = initialState, action) {
    switch (action.type) {
        case ADD_NAME:
            return {
                ...state,
                name: action.payload
            }
        case REDUCE_NAME:
            return {
                ...state,
                name: null
            }
        default:
            return state
    }
}

export const addName = (payload) => ({
    type: ADD_NAME,
    payload: payload
});

export const reduceName = (payload) =>({
    type: REDUCE_NAME,
    payload: payload
});