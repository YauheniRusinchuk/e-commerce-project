import {CREATE_ORDER, ERROR_CREATE_ORDER} from '../actions/Actiontypes'


const initialState = {
    complite: false,
}

export default function(state = initialState, action) {
    switch (action.type) {
        case CREATE_ORDER:
            return {
                ...state,
                complite: true
            }
        case ERROR_CREATE_ORDER:
            return {
                ...state,
                complite: false
            }
        default:
            return state;
    }
}
