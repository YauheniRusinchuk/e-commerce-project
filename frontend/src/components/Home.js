import React from 'react'
import ProductList from './ProductList'


function Home() {
    return(
        <div className='home_container'>
            <p>ДОБРО ПОЖАЛОВАТЬ В НАШ МАГАЗИН</p>
            <ProductList />
        </div>
    )
}

export default Home;
