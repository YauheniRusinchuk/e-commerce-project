import React from 'react'
import {Link} from 'react-router-dom'
import {deleteProductInCart} from '../actions/cart'
import {useDispatch} from 'react-redux'

function CartView ({products}) {

    const dispatch = useDispatch();


    function handleDelelte(id) {
        dispatch(deleteProductInCart(id))
    }

    return (
        <div className='cartview'>
            {products.map(product=> {
                return(
                    <div key={product.id} className='cartview_item'>
                        <Link to={`/detail${product.id}`}>{product.title}</Link>
                        <img src={product.photo} width='30px' height='30px' alt='img_d' />
                        <span>{product.price} $</span>
                        <button onClick={()=> handleDelelte(product.id)}>удалить</button>
                    </div>
                )
            })}
        </div>
    )
}

export default CartView
