import React from 'react'
import {useSelector} from 'react-redux'
import CartView from './CartView'


function Cart() {

    const carts = useSelector(state => ({
        mycars: state.carts.carts
    }))

    return(
        <div className='my_card_container'>
            {carts.mycars.length ? (
                <CartView products={carts.mycars} />
            ) : <p>У ВАС ПОКА НЕТУ НИЧЕГО В КОРЗИНЕ</p>}
        </div>
    )
}

export default Cart;
