
import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Register from './screens/Register';
import Login from './screens/Login';
import LandingPage from './screens/LandingPage';
import Documentation from './screens/Documentation';
import Editor from './screens/Editor';
import View from './screens/View';
import './style/root.css';
import Projects from './screens/Projects';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<LandingPage/>}></Route>
        <Route path="register" element={<Register/>}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="projects" element={<Projects/>}></Route>
        <Route path="docs" element={<Documentation/>}></Route>
        <Route path="editor" element={<Editor/>}></Route>
        <Route path="view" element={<View />}>
          <Route path=":projectId" element={<View />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
