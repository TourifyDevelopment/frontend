
import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Register from './screens/Register';
import Login from './screens/Login';
import LandingPage from './screens/LandingPage';
import './style/root.css';
import './style/App.module.css';

function App() {
  return (
    <BrowserRouter>
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Sign In</Link>
        
        </nav>   
        <Routes>
          <Route path="/" element={<LandingPage/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
    </>
       
    </BrowserRouter>
  );
}

export default App;
