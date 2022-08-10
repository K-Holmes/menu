import React from 'react';
import MainHeader from './MainHeader';
import './index.css';
import './App.css';
import {Outlet} from 'react-router-dom'


function App() {
  return (
    <>
    
    <div><MainHeader/> <nav/> <Outlet></Outlet>

    </div>
    
    </>
  );
}

export default App;