import React from 'react';
import MainHeader from './MainHeader';
import './index.css';
import './App.css';
import {Outlet} from 'react-router-dom';
import Menu from './Menu';


function App() {
  return (
    <>
    
    <div><MainHeader/> <nav/> <Outlet></Outlet>
    <Menu/>

    </div>
    
    </>
  );
}

export default App;