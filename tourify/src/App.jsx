
import React from 'react';
import { BrowserRouter, Switch, Route, Link, Routes } from 'react-router-dom';
import Authentication from './screens/Authentication';
import Editor from './screens/Editor';
import LandingPage from './screens/LandingPage';

function App() {
  return (
    <BrowserRouter>
    <>
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/auth">Auth</Link>
            </li>
            <li>
              <Link to="/editor">Editor</Link>
            </li>
          </ul>
        
        </nav>   
        <Routes>
          <Route path="/" element={<LandingPage/>}></Route>
          <Route path="/auth" element={<Authentication/>}></Route>
          <Route path="/editor" element={<Editor/>}></Route>
        </Routes>
    </>
       
    </BrowserRouter>
  );
}

export default App;
