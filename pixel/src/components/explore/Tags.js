import React from "react";
import "./Tags.css";
import Box from '@mui/material/Box';
import TagContent from "../TagContent";
import Link from '@mui/material/Link';

import Divider from '@mui/material/Divider';

import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.9),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
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
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));


  const buttons = [
    <Button key="one">좋아요 많은 순</Button>,
    <Button key="two">최신 순</Button>,
    <Button key="three">졸려</Button>,
  ];


export default function Tags(){
    return(
        <div className="tagContainerBox">
            <Box className="tagBox">
                <h3 className="title">Tags</h3>
                <TagContent/>
                <Link href="#" color="#349BF0" underline="none"
                    variant="body2"
                    noWrap
                    display='block'
                    align="center"
                >
                
            </Link>
                <Divider sx={{marginTop: '16px', marginBottom: '10px'}}/>
                <h3 className="title">Sort</h3>

    
                    <ButtonGroup
                        sx={{mr: 5, ml: 5}}
                        color="primary"
                        orientation="vertical"
                        aria-label="vertical contained button group"
                        variant="text"
                    >
                        {buttons}
                    </ButtonGroup>

             <Divider sx={{marginTop: '16px', marginBottom: '10px'}}/>
             <h3 className="title">Search</h3>
                 <Search>
                    <SearchIconWrapper>
                    <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                    placeholder="검색…"
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
            </Box>
        </div>
    );
}