import React from 'react'
import {Link} from 'react-router-dom'

export const NavBar = () => (
    <div className='header_container'>
        <Link to='/'>ГЛАВНАЯ</Link>
        <Link to='/mycard'>МОЯ КОРЗИНА</Link>
    </div>
)
