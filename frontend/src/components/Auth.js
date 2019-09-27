import React, {useEffect, useState} from 'react'
import {Redirect} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {login} from '../actions/auth';


function Login() {


    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const isAuth = useSelector(state => ({
        auth: state.auth
    }))


    function submitLogin(e) {
        e.preventDefault();
        if(username && password) {
            dispatch(login(username, password));
        }
    }

    if (isAuth.auth.isAuthenticated) {
        return <Redirect to='/manager' />
    }
    return (
        <div className='login_container'>
            <p>Что бы войти в панель менеджера нужно залогиниться.</p>
            <form onSubmit={submitLogin}>
                <input value={username} onChange={e => setUsername(e.target.value)} type='text' placeholder="Введите логин ..." />
                <input value={password} onChange={e => setPassword(e.target.value)} type='password' placeholder="Введите пароль ..." />
                <button>ВОЙТИ</button>
            </form>
        </div>
    )
}


export default Login;
