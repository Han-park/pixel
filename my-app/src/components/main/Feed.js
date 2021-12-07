import React from "react";
import FeedContent from "./FeedContent";
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box'
import "./Feed.css";

export default function Feed(props){
    return(
        <Box className="Feed" sx={{ maxWidth: (props.maxWidth), mt: (props.marginTop)}}>
           
            <FeedContent nLike={12} nComment={5} nBookmark={1}/>
            {/* <Divider /> */}
            <FeedContent nLike={4} nBookmark={10}/>
            {/* <Divider /> */}
            <FeedContent  nComment={5} nBookmark={1}/>
            <br/><br/><br/><br/>
            
        </Box>
    );
}