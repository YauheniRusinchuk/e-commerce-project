import React from 'react'


function Product({title, photo, price}) {
    return (
        <div className='product_item'>
            <span className='product_item_price'>{price}</span>
            <img src={photo} alt='photo_watch'/>
            <p className='product_item_title'>{title}</p>
        </div>
    )
}

export default Product;
