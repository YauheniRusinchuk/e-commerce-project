import React from 'react'
import ProductList from './ProductList'


function Home() {
    return(
        <div className='home_container'>
            <span>ДОБРО ПОЖАЛОВАТЬ В НАШ МАГАЗИН</span>
            <ProductList />
        </div>
    )
}

export default Home;
