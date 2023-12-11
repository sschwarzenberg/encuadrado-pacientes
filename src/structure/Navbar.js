import React from 'react';
import { AppBar, Toolbar, Button, Typography, IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ height: 64 }}>
      <Toolbar className='navbar'>
        <img src="logo.svg" alt="Logo" style={{ height: 40, marginRight: 10 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
          Encuadrado
        </Typography>
        <IconButton color="inherit" component={NavLink} to="/profile">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;