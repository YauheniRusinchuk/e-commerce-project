import React, {useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Loading} from './Loading'
import {addToCart} from '../actions/cart'


function Detail(props) {


    const dispatch = useDispatch();
    const [product, setProduct] = useState();

    const products = useSelector(state => ({
        products: state.products.products,
    }))

    useEffect(()=> {
        const obj = products.products.filter(item => item.id == props.match.params.id)
        setProduct(obj[0])
    },[])

    function handleAdd(id) {
        dispatch(addToCart(id))

    }


    return (
        <div className='detail_container'>
            {product ? (
                <div className='detail_item'>
                    <p>{product.title}</p>
                    <p>{product.description}</p>
                    <img src={product.photo} alt='name_photo' /><br/>
                    <button onClick={()=> handleAdd(product.id)} >ДОБАВИТЬ В КОРЗИНУ</button>
                </div>
            ): <Loading />}
        </div>
    )
}

export default Detail;
