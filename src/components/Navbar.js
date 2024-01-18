import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import Logo from '../assests/logo.jpg';

const NavBar = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}  style={{
      borderBottom: '1px solid rgba(0, 0, 0, 0.2)' 
    }}>
      <Toolbar>
        <img src={Logo} alt="Logo" style={{ marginRight: 'auto', borderRadius: '50%', maxWidth: '80px', maxHeight: '80px' }} />
        <Box sx={{ marginLeft: 'auto' }}>
          <Button 
            color="inherit" 
            sx={{ 
              '&:hover': { boxShadow: '0px 0px 10px #fff', backgroundColor: '#ddd' },
              marginRight: 2,
              fontSize: '1.1rem', 
              fontFamily: 'Poppins, sans-serif' 
            }}
          >
            Login
          </Button>
          <Button 
            color="inherit" 
            sx={{ 
              '&:hover': { boxShadow: '0px 0px 10px #fff', backgroundColor: '#ddd' },
              fontSize: '1.1rem', 
              fontFamily: 'Poppins, sans-serif' 
            }}
          >
            Register
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
