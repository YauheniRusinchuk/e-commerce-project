import React, {useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Loading} from './Loading'
import {addToCart} from '../actions/cart'


function Detail(props) {


    const dispatch = useDispatch();
    const [product, setProduct] = useState();
    const [check, setCheck] = useState(false);

    const products = useSelector(state => ({
        products: state.products.products,
        carts: state.carts,
    }))

    useEffect(()=> {
        const obj = products.products.filter(item => item.id == props.match.params.id)
        setProduct(obj[0])
        checkProductInCart(products.carts, obj[0])
    },[])

    async function handleAdd(id) {
        await dispatch(addToCart(id))
        await setCheck(true)
    }

    function checkProductInCart(carts, obj) {
        for(let i = 0; i < carts.carts.length; i++) {
            if(carts.carts[i].id == obj.id) {
                setCheck(true)
            }
        }
    }


    return (
        <div className='detail_container'>
            {product ? (
                <div className='detail_item'>
                    <p>{product.title}</p>
                    <p>{product.description}</p>
                    <img src={product.photo} alt='name_photo' /><br/>
                    {check ? <span style={{color: 'green', fontSize: "12px"}}>Этот товар уже есть в корзине</span> : <button onClick={()=> handleAdd(product.id)} >ДОБАВИТЬ В КОРЗИНУ</button> }
                </div>
            ): <Loading />}
        </div>
    )
}

export default Detail;
