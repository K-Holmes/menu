import { Divider } from '@mui/material';
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import menu from './data';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Menu = () => {
  return (
        <List disablePadding>
        <div className='section-center'>
        {menu.map((menu) => (
          <ListItem key={menu.name} sx={{ py: 1, px: 1 }}>
            <div className="menu-item">
            <div>
              <img className="photo" src={menu.img} alt ='' />
            </div>
            <div>
              <h4>
            <ListItemText className = "item-info" primary={menu.title}/> 
            </h4>
            <ListItemText className = "price" secondary={menu.price}/>
            <Typography variant="body2">{menu.desc}</Typography>
            </div>
            </div>
          </ListItem>
          ))}
          </div>
        </List>
  );
};

export default Menu;