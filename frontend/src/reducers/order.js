import {CREATE_ORDER, ERROR_CREATE_ORDER, ORDERS_LOAD} from '../actions/Actiontypes'


const initialState = {
    orders: [],
    complite: false,
}

export default function(state = initialState, action) {
    switch (action.type) {
        case ORDERS_LOAD:
            return {
                ...state,
                orders: action.payload
            }
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
