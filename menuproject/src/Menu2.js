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
      <div className="section-center">
        <List disablePadding>
        <div className="menu-item">
        {menu.map((menu) => (
          <ListItem key={menu.name} sx={{ py: 1, px: 0 }}>
            <div>
              <img className="photo"src={menu.img} alt ='' />
            </div>
            <div>
            <ListItemText primary={menu.title} secondary={menu.price}/>
            <Typography variant="body2">{menu.desc}</Typography>
            </div>
          </ListItem>
          ))}
          </div>
        </List>
    </div>
  );
};

export default Menu;