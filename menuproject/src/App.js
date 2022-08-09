import React, { useState } from 'react';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Menu from './Menu2';
import Categories from './Categories';
import items from './data';
import './index.css';

function App() {
  return (
    <>
    <h3 className='title'>Our Menu</h3>
    <Divider variant="middle" className="underline" />

    <div className="btn-container">
    <Button variant="text">All</Button>
    <Button variant="text">Breakfast</Button>
    <Button variant="text">Lunch</Button>
    <Button variant="text">Dinner</Button>
    </div>
    <Menu/>
    </>
  );
}

export default App;