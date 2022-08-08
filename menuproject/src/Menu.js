import { Divider } from '@mui/material';
import React from 'react';
import pancake from './pancake.jpeg';

const Menu = () => {
  return (
    <div className="section-center">
      <div className="menu-item">
        <div>
          <img className ="photo" src= {pancake}
          alt ="pancakes" />
        </div>
        <div>
          <header className="item-info">
            <h4 className ="item-info">Buttermilk Pancakes</h4>
            <h4 className='price'>$15.99</h4>
            </header>
          <Divider/>
          <p className ="item-text"><small>Heres the details on the dish</small></p>
        </div>

      </div>
    </div>
  );
};

export default Menu;