import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { signout } from '../../store/actions/authActions';

const ContactsAppBar = () => {
    const dispatch = useDispatch();

    const signOutHandler = () => {
        dispatch(signout());
      }
    
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Personal notebook ๐ / All you need is Contacts โ
          </Typography>

         <Button color="inherit" onClick={signOutHandler}>ะัะนัะธ</Button>
        </Toolbar>
      </AppBar>
    </Box>
        </div>
    );
};

export default ContactsAppBar;