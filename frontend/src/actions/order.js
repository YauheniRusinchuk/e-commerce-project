import axios from 'axios'

import {
    CREATE_ORDER,
    ERROR_CREATE_ORDER,
} from './Actiontypes';




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
