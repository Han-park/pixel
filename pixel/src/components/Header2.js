import * as React from 'react';
import { Link as RouterLink } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import Link from '@mui/material/Link';
import Chip from '@mui/material/Chip';

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';



export default function PrimarySearchAppBar() {

  const preventDefault = (event) => event.preventDefault();

  return (
    <div>
    <Box>
      <AppBar
       position="fixed"
       color="default" elevation="0" sx={{borderBottom: '1px solid #e0e0e0', backgroundColor: 'white'}}>
        <Toolbar>

          <Link href="#" color="inherit" underline="none" component={RouterLink} to="/"
            variant="h5"
            noWrap
            sx={{ mr: 1, 
            }}
          >
            <b>P!XEL</b>
          </Link>
          <Link href="#" color="inherit" underline="hover" component={RouterLink} to="/explore"
            variant="h6"
            noWrap
            sx={{ mr: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Explore
          </Link>
          <Link href="#" color="inherit" underline="hover" component={RouterLink} to="/community"
            variant="h6"
            noWrap
            sx={{ mr: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Community
          </Link>

          {/* 로그인, 가입하기 Button */}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>


             <Chip label="로그인" variant="outlined" onClick sx={{mr: 1}}/>

          </Box>

          {/* Notifications Icon Box */}
          <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              onClick={preventDefault}
              color="inherit"
            >
              <NotificationsNoneIcon sx={{opacity: 0.7}} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

    </Box>
    

    </div>
  );
}