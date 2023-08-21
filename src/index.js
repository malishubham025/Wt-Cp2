import React from 'react';
import  ReactDOM  from 'react-dom';
import App from './components/App';
import Login from './components/login-signup';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
ReactDOM.render(
  <Router>
    <Routes>
       <Route path="/" element={<App/>}/>
       <Route path="/login" element={<Login/>}/>
    </Routes>
  </Router>
  ,document.querySelector("#root"))
