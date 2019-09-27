import {combineReducers} from 'redux';
import products from './products'
import carts from './cart'
import auth from './auth'

export default combineReducers({
    products,
    carts,
    auth,
})
