import React from 'react'
import {Link} from 'react-router-dom'


function Product({title, photo, price, id}) {
    return (
        <Link style={{textDecoration: "none", color: '#292828'}} to={`/detail${id}`}>
            <div className='product_item'>
                <span className='product_item_price'>{price} $</span>
                <img src={photo} alt='photo_watch'/>
                <p className='product_item_title'>{title}</p>
            </div>
        </Link>
    )
}

export default Product;
