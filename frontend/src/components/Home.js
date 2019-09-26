import React, {Fragment} from 'react'
import ProductList from './ProductList'
import {useSelector} from 'react-redux'
import {Loading} from './Loading'
import {Footer} from './Footer'

function Home() {

    const products = useSelector(state => ({
        products: state.products.products,
        isLoading: state.products.isLoading,
    }))

    return(
        <Fragment>
        <div className='home_container'>
            <span>ДОБРО ПОЖАЛОВАТЬ В НАШ МАГАЗИН</span>
            {products.products.length ? <ProductList products={products.products}/> : <Loading /> }
        </div>
        <Footer />
        </Fragment>
    )
}

export default Home;
