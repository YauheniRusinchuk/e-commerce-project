import {
    ADD_TO_CART,
    DELETE_PRODUCT_IN_CART
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



export const deleteProductInCart = id => (dispatch, getState) => {
      dispatch({
        type: DELETE_PRODUCT_IN_CART,
        payload: id
      });
}
