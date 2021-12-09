import * as React from 'react';
import { Link as RouterLink } from "react-router-dom";

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import Link from '@mui/material/Link';
import Chip from '@mui/material/Chip';

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';

import InputBase from '@mui/material/InputBase';

import TagContent from "../TagContent";

import "./ExploreMobileHeader.css";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.9),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('md')]: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    // transition: theme.transitions.create('width'),
    width: '100%',
    // [theme.breakpoints.up('sm')]: {
    //   width: '12ch',
    //   '&:focus': {
    //     width: '20ch',
    //   },
    // },
  },
}));


export default function ExploreMobileHeader() {

  const preventDefault = (event) => event.preventDefault();

  return (
    <div className="exploreMobileHeader">
    <Box>
      <AppBar
       position="fixed"
       color="default" elevation="0" sx={{borderBottom: '1px solid #e0e0e0', backgroundColor: 'white'}}>
        <Toolbar>

          <Link color="inherit" underline="none" component={RouterLink} to="/explore"
            variant="h5"
            noWrap
            sx={{ mr: 1, 
            }}
          >
            <b>Explore</b>
          </Link>
        

          {/* 로그인, 가입하기 Button */}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>


             <Chip label="로그인" variant="outlined" onClick sx={{mr: 1}}/>
             <Chip label="가입하기" color="primary" onClick sx={{mr: 1}}/>

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



          <Box sx={{pb: 2, pl: 2, pr: 2}}>
            <Search className="searchFieldBox">
            <SearchIconWrapper>
            <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
            placeholder="검색…"
            inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Box>
        <Box sx={{pl: 2, pb: 2}}>
          <TagContent sx={{width: '100%'}}/>
        </Box>




      </AppBar>

    </Box>
    

    </div>
  );
}