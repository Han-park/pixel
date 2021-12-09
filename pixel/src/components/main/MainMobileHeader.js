import * as React from 'react';
import { Link as RouterLink } from "react-router-dom";


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import Link from '@mui/material/Link';
import Chip from '@mui/material/Chip';

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

import Fade from '@mui/material/Fade';


import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';

import Trending from "./Trending";


function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
       <Trending />
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function PrimarySearchAppBar() {

  const preventDefault = (event) => event.preventDefault();


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };


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
            <b>Home</b>
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
          {/* Flare Icon */}
          {/* Notifications Icon Box */}
          <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>

          <Fade in>
            <Chip label="최근 덧글"
            //  variant="outlined"
            onClick={handleClickOpen}
            sx={{mt: 1}}/>

          </Fade>
            

          {/* <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              onClick={preventDefault}
              color="inherit"
            >
              <FlareIcon sx={{opacity: 0.7}} />
            </IconButton> */}

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
    
    <SimpleDialog
        open={open}
        onClose={handleClose}
      />

    </div>
  );
}