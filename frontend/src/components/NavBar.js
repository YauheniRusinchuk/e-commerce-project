import React from 'react'
import cart from '../assets/shopping-cart.png'
import home from '../assets/home.png'
import {Link} from 'react-router-dom'

export const NavBar = () => (
    <div className='header_container'>
        <div className='header_home'>
            <Link to='/'><img src={home} alt='home_img' /> ГЛАВНАЯ</Link>
        </div>
        <div className='my_cart'>
            <Link to='/mycard'>МОЯ КОРЗИНА <img src={cart} alt='cart_img' /></Link>
        </div>
    </div>
)
