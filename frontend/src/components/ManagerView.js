import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import OrderView from './OrderView'
import {logout} from '../actions/auth'


function ManagerView({user}) {

    const dispatch = useDispatch();
    const [isLogout, setLogout] = useState(false);


    function logountHandle(e) {
        e.preventDefault();
        dispatch(logout());
        setLogout(true)

    }

    const isAuth = useSelector(state => ({
        auth: state.auth,
        orders: state.orders,
    }))


    return (
        <div className='managerview'>
            {isLogout && <Redirect to='/' />}
            {isAuth.orders.orders.length ? <OrderView orders={isAuth.orders.orders}  /> : <p>НЕТ ЗАКАЗОВ</p>}
            <button onClick={logountHandle} >ВЫЙТИ</button>
        </div>
    )
}


export default ManagerView;
