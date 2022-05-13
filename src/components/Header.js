import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material';
import { HeadsetTwoTone } from '@mui/icons-material';




const Header = () => {

    return (

        <AppBar color="secondary" position="fixed">

            <Toolbar>
                <HeadsetTwoTone style={{fontSize: '30px'}} />
                <Typography variant='h6' style={{marginLeft: '8px'}}  component="h1">Spotyfalso</Typography>
            </Toolbar>

        </AppBar>

    )

}



export default Header;