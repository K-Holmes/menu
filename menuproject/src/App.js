import React, { useState } from 'react';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import './index.css';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';

function App() {
  return (
    <>
    <h3 className='title'>Our Menu</h3>
    <Grid alignSelf='center' width={80} className = "centerthis">
    <Box alignSelf='center'
    sx={{
      width: 90,
      height: 4,
      backgroundColor: '#c59d5f' }} />
    </Grid>

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