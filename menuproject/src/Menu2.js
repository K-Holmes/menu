import { Divider } from '@mui/material';
import React from 'react';
import pancake from './images/pancake.jpeg';
import breakfast from './images/breakfast.jpeg'
import burger from './images/burger.jpeg'
import doubleshake from './images/doubleshake.jpeg'
import eggburger from './images/eggburger.jpeg'
import eggmcmuffin from './images/eggmcmuffin.jpeg'
import kidsmeal from './images/kidsmeal.jpeg'
import milkshake from './images/milkshake.jpeg'
import oreo from './images/oreo.jpeg'
import steak from './images/steak.jpeg'

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
          <p className ="item-text"><small>I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed</small></p>
        </div>
      </div>

    </div>
  );
};

export default Menu;