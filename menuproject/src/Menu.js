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
          <p className ="item-text"><small>I'm baby woke mlkshk 
            wolf bitters live-edge blue bottle, hammock freegan 
            copper mug whatever cold-pressed</small></p>
        </div>
      </div>

      <div className="menu-item">
        <div>
          <img className ="photo" src= {burger}
          alt ="pancakes" />
        </div>
        <div>
          <header className="item-info">
            <h4 className ="item-info">Diner Double</h4>
            <h4 className='price'>$13.99</h4>
            </header>
          <Divider/>
          <p className ="item-text"><small>vaporware iPhone 
            mumblecore selvage raw denim slow-carb leggings 
            gochujang helvetica man braid jianbing. Marfa 
            thundercats</small></p>
        </div>
      </div>

      <div className="menu-item">
        <div>
          <img className ="photo" src= {milkshake}
          alt ="pancakes" />
        </div>
        <div>
          <header className="item-info">
            <h4 className ="item-info">Godzilla Milkshake</h4>
            <h4 className='price'>$6.99</h4>
            </header>
          <Divider/>
          <p className ="item-text"><small>ombucha chillwave 
            fanny pack 3 wolf moon street art photo booth before 
            they sold out organic viral.</small></p>
        </div>
      </div>

      <div className="menu-item">
        <div>
          <img className ="photo" src= {breakfast}
          alt ="pancakes" />
        </div>
        <div>
          <header className="item-info">
            <h4 className ="item-info">Country Delight</h4>
            <h4 className='price'>$20.99</h4>
            </header>
          <Divider/>
          <p className ="item-text"><small>Shabby chic keffiyeh 
            neutra snackwave pork belly shoreditch. Prism austin 
            mlkshk truffaut,</small></p>
        </div>
      </div>

      <div className="menu-item">
        <div>
          <img className ="photo" src= {eggburger}
          alt ="pancakes" />
        </div>
        <div>
          <header className="item-info">
            <h4 className ="item-info">Egg Attack</h4>
            <h4 className='price'>$22.99</h4>
            </header>
          <Divider/>
          <p className ="item-text"><small>franzen vegan
             pabst bicycle rights kickstarter pinterest
              meditation farm-to-table 90's pop-up</small></p>
        </div>
      </div>

      <div className="menu-item">
        <div>
          <img className ="photo" src= {oreo}
          alt ="pancakes" />
        </div>
        <div>
          <header className="item-info">
            <h4 className ="item-info">Oreo Dream</h4>
            <h4 className='price'>$18.99</h4>
            </header>
          <Divider/>
          <p className ="item-text"><small>Portland 
            chicharrones ethical edison bulb, palo santo 
            craft beer chia heirloom iPhone everyday</small></p>
        </div>
      </div>

      <div className="menu-item">
        <div>
          <img className ="photo" src= {eggmcmuffin}
          alt ="pancakes" />
        </div>
        <div>
          <header className="item-info">
            <h4 className ="item-info">Bacon Overflow</h4>
            <h4 className='price'>$8.99</h4>
            </header>
          <Divider/>
          <p className ="item-text"><small>carry jianbing 
            normcore freegan. Viral single-origin coffee 
            live-edge, pork belly cloud bread iceland put 
            a bird </small></p>
        </div>
      </div>

      <div className="menu-item">
        <div>
          <img className ="photo" src= {kidsmeal}
          alt ="pancakes" />
        </div>
        <div>
          <header className="item-info">
            <h4 className ="item-info">American Classic</h4>
            <h4 className='price'>$12.99</h4>
            </header>
          <Divider/>
          <p className ="item-text"><small>on it tumblr kickstarter 
            thundercats migas everyday carry squid palo santo leggings. 
            Food truck truffau</small></p>
        </div>
      </div>

      <div className="menu-item">
        <div>
          <img className ="photo" src= {steak}
          alt ="pancakes" />
        </div>
        <div>
          <header className="item-info">
            <h4 className ="item-info">Steak & Greens</h4>
            <h4 className='price'>$16.99</h4>
            </header>
          <Divider/>
          <p className ="item-text"><small>on it tumblr kickstarter 
            thundercats migas everyday carry squid palo santo leggings. 
            Food truck truffaut</small></p>
        </div>
      </div>

      <div className="menu-item">
        <div>
          <img className ="photo" src= {doubleshake}
          alt ="pancakes" />
        </div>
        <div>
          <header className="item-info">
            <h4 className ="item-info">Quarantine Buddy</h4>
            <h4 className='price'>$7.99</h4>
            </header>
          <Divider />
          <p className ="item-text"><small>Pellentesque nec 
            pulvinar purus. Aenean laoreet faucibus ornare. 
            Donec fermentum nisi leo, </small></p>
        </div>
      </div>

    </div>
  );
};

export default Menu;