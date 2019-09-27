import React from 'react'
import {Redirect} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {logout} from '../actions/auth'


function ManagerView({user}) {

    const dispatch = useDispatch();
    


    function logountHandle(e) {
        e.preventDefault();
        dispatch(logout());
    }

    const isAuth = useSelector(state => ({
        auth: state.auth
    }))

    return (
        <div className='managerview'>
            <p>COMPLITE USER</p>
            <button onClick={logountHandle} >ВЫЙТИ</button>
        </div>
    )
}


export default ManagerView;
