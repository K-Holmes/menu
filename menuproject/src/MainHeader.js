import React from 'react';
import Button from '@mui/material/Button';
import './index.css';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

export default function MainHeader() {
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
      <Button variant="text">Shakes</Button>
      <Button className="btn btn-primary btn-color" variant="text"><Link to = "/">Log In</Link></Button>
      </div>
      </>
    );
  }