import React from 'react'
import Product from './Product'


function ProductList({products}) {

    return(
        <div className='product_list'>
            {products.map(product => {
                return (
                    <Product
                        key={product.id}
                        title={product.title}
                        photo={product.photo}
                        price={product.price}
                        id={product.id}
                    />
                )
            })}
        </div>
    )
}

export default ProductList
