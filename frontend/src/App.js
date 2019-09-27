import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {NavBar} from './components/NavBar'
import {NotFound} from './components/NotFound'
import Home from './components/Home'
import Cart from './components/Cart'
import {useDispatch} from 'react-redux'
import {getProducts} from './actions/products'
import Detail from './components/Detail'
import Manager from './components/Manager'
import Login from './components/Auth'
import {loadUser} from './actions/auth'
// import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getProducts());
        dispatch(loadUser());
    })

    return (
          <BrowserRouter>
            <NavBar />
            <div className='main_container'>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/mycard' component={Cart} />
                    <Route path='/detail:id' component={Detail} />
                    <Route path='/login' component={Login} />
                    <Route path='/manager' component={Manager} />
                    <Route component={NotFound} />

                </Switch>
            </div>
          </BrowserRouter>
      );
}

export default App;
