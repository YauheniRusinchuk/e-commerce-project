import {combineReducers} from 'redux';
import products from './products'
import carts from './cart'
import auth from './auth'
import orders from './order'

export default combineReducers({
    products,
    carts,
    auth,
    orders,
})
