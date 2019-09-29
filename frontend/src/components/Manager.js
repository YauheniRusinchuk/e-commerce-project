import React from 'react'
import {useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {Loading} from './Loading'
import ManagerView from './ManagerView'

function Manager() {

    const isAuth = useSelector(state => ({
        auth: state.auth
    }))


    if (!isAuth.auth.isAuthenticated) {
        return <Redirect to='/login' />
    }


    return (
        <div className='manager_container'>
            {isAuth.auth.user ? <ManagerView user={isAuth.auth.user} /> : <Loading /> }
        </div>
    )
}

export default Manager;
