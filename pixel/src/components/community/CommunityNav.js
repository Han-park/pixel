import React from "react";
import "./CommunityNav.css";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


export default function CommunityNav(){
    return(
     
            <Box sx={{ bgcolor: 'background.paper' }} className="navBox">
            <nav aria-label="secondary mailbox folders">
              <List>

                <ListItem disablePadding>
                <ListItemButton component="a" href="#anchorA" sx={{height: 35, borderRadius: 3}}>
                    <ListItemText primary="Notice" />
                  </ListItemButton>
                </ListItem>


                <ListItem disablePadding>
                  <ListItemButton component="a" href="#anchorC" sx={{height: 35, borderRadius: 3}}>
                    <ListItemText primary="Members" />
                  </ListItemButton>
                </ListItem>


                <ListItem disablePadding>
                  <ListItemButton component="a" href="#anchorB" sx={{height: 35, borderRadius: 3}}>
                    <ListItemText primary="Award" />
                  </ListItemButton>
                </ListItem>
  

                <ListItem disablePadding>
                  <ListItemButton component="a" href="#anchorD" sx={{height: 35, borderRadius: 3}}>
                    <ListItemText primary="About" />
                  </ListItemButton>
                </ListItem>

              </List>
            </nav>
          </Box>

    );
}