import axios from 'axios'

import {
    PRODUCTS_LOADING,
    PRODUCTS_LOAD
} from './Actiontypes';


// GET Products
export const getProducts = () => (dispatch, getState) => {
  axios
    .get("http://127.0.0.1:8000/api/v1/products/all")
    .then(res => {
        dispatch({type: PRODUCTS_LOADING})
        dispatch({
            type: PRODUCTS_LOAD,
            payload: res.data
        });
    })
    .catch(err =>
        console.log(err.response)
     );
};
