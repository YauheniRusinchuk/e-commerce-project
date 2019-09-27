import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
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
        auth: state.auth
    }))

    return (
        <div className='managerview'>
            {isLogout && <Redirect to='/' />}
            <p>COMPLITE USER</p>
            <button onClick={logountHandle} >ВЫЙТИ</button>
        </div>
    )
}


export default ManagerView;
