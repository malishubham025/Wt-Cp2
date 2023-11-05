import React from 'react';
import  ReactDOM  from 'react-dom';
import App from './components/App';
import Login from './components/login-signup';
import AdminLogin from './components/Admin';
import AdminPage from './components/mainAdmin';
import Volunteers from './components/Volunteers';
import AboutUs from './components/AboutUs';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
ReactDOM.render(
  <Router>
    <Routes>
       <Route path="/" element={<App/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/AboutUs" element={<AboutUs/>} />
       <Route path="/Admin" element={<AdminLogin/>}/>
       <Route path="/admin-page" element={<AdminPage/>}/>
       <Route path="/volunteers" element={<Volunteers/>}/>
    </Routes>
  </Router>
  ,document.querySelector("#root"))
