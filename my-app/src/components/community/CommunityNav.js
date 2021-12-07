import React from "react";
import "./CommunityNav.css";
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';


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