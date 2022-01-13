import React from 'react';
import Header from './header';
import {HashRouter , Routes, Route} from 'react-router-dom';
import Login from './login';
import Register from './register';
import Cart from './cart';
import Home from './home';
import Myorder from './myorder';
import Manageproduct from './manageproduct';

function App() {
  return (
    <HashRouter>
        <Header/>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/cart" element={<Cart/>}/>
            <Route exact path="/register" element={<Register/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/orderlist" element={<Myorder/>}/>
            <Route exact path="/myproduct" element={<Manageproduct/>}/>
        </Routes>
    </HashRouter>
    
  );
}

export default App;
