import { Link, Typography } from '@mui/material';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import  Help from './components/Help';
import Request from './components/Request';
import Sidebar from './components/Sidebar';
import AppLayout from './components/AppLayout';
import Data from './components/Data';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import Wishlist from './components/Wishlist';


import { Routes, Route } from "react-router-dom";
import Album from './components/Album';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        MedRain
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
      
    </Typography>
  );
}
function App() {
  return (
    <div className="App">
      <Header/>
        
     <Data/>

 <Copyright/>
    </div>
  );
}
export default App;
