import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {NavBar} from './components/NavBar'
import Home from './components/Home'
import Cart from './components/Cart'
// import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
      <BrowserRouter>
        <NavBar />
        <div className='main_container'>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/mycard' component={Cart} />
            </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
