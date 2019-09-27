import axios from 'axios'
import {tokenConfig} from './auth'

import {
    CREATE_ORDER,
    ERROR_CREATE_ORDER,
    ORDERS_LOAD,
} from './Actiontypes';


export const loadOrder = () => (dispatch, getState) => {
    axios
        .get("http://127.0.0.1:8000/orders/api/v1/all")
        .then(res => {
            dispatch({
                type: ORDERS_LOAD,
                payload: res.data
            });
        })
        .catch(err =>
            console.log(err.response)
        );
}




export const createOrder = (data) => (dispatch, getState) => {
  axios
    .post("http://127.0.0.1:8000/orders/api/v1/create", data)
    .then(res => {
        console.log(res)
        dispatch({
            type: CREATE_ORDER,
            payload: res.data
        });
    })
    .catch(err => {
         console.log(err)
         dispatch({type: ERROR_CREATE_ORDER})
        }
     );
};
