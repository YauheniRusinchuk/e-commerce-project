import {PRODUCTS_LOADING, PRODUCTS_LOAD} from '../actions/Actiontypes'


const initialState = {
    isLoading: false,
    products: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case PRODUCTS_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case PRODUCTS_LOAD:
            return {
                ...state,
                isLoading: false,
                products: action.payload
            }
        default:
            return state;
    }
}
