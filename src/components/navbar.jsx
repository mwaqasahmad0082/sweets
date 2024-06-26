import React from 'react'
import { AppBar,Typography,Button, Toolbar } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';



const navbar = () => {
  return (
    <AppBar position='static'>
        <Toolbar>
        <Typography variant='h6' flexGrow={1}>
        my first project
       </Typography>
       <Button variant='text' color='inherit' startIcon={<LoginIcon/>}>LOGIN</Button>
       <Button variant='text' color='inherit'endIcon={<LogoutIcon/>}>LOGOUT</Button>

        </Toolbar>
    </AppBar>
  )
}

export default navbar