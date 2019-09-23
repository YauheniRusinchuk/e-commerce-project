import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'

function Detail(props) {

    const products = useSelector(state => ({
        products: state.products.products,
    }))

    useEffect(()=> {
        const obj = products.products.filter(item => item.id == props.match.params.id)
    })
    

    return (
        <div>
            <p>DETAIL</p>
        </div>
    )
}

export default Detail;
