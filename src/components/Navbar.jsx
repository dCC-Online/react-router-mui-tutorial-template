import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          App Name
        </Typography>
        <Button color="inherit" component={Link} to="/" sx={{marginRight:"10px"}}>
          Home
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;