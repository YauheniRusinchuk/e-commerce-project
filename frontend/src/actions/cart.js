import {
    ADD_TO_CART
} from './Actiontypes';


export const addToCart = (id) => (dispatch, getState) => {

    const list_products = getState().products.products
    list_products.forEach(product => {
        if(product.id == id){
            dispatch({
                type: ADD_TO_CART,
                payload: product,
            })
        }
    })
}
