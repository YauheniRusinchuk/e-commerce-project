import React from 'react'
import ProductList from './ProductList'
import {useSelector} from 'react-redux'
import {Loading} from './Loading'


function Home() {

    const products = useSelector(state => ({
        products: state.products.products,
        isLoading: state.products.isLoading,
    }))

    return(
        <div className='home_container'>
            <span>ДОБРО ПОЖАЛОВАТЬ В НАШ МАГАЗИН</span>
            {products.products.length ? <ProductList products={products.products}/> : <Loading /> }
        </div>
    )
}

export default Home;
