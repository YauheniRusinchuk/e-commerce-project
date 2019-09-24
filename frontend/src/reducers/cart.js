import {LOAD_CART, ADD_TO_CART, DELETE_PRODUCT_IN_CART} from '../actions/Actiontypes'


const initialState = {
    carts: []
}


export default function(state = initialState, action) {
    switch (action.type) {
        case LOAD_CART:
            return {
                ...state,
                carts: action.payload
            }
        case ADD_TO_CART:
            return {
                ...state,
                carts: [...state.carts, action.payload]
            }

        case DELETE_PRODUCT_IN_CART:
            return {
                ...state,
                carts: state.carts.filter(product => product.id !== action.payload)
            }
        default:
            return state;
    }
}
