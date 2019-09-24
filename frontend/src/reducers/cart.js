import {LOAD_CART, ADD_TO_CART} from '../actions/Actiontypes'


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
        default:
            return state;
    }
}
