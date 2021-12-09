import React from "react";
import Box from '@mui/material/Box'
import "./Feed.css";
import PostContent from "../post/PostContent2";

export default function Feed(props){
    return(
        <Box className="Feed" sx={{ maxWidth: (props.maxWidth), mt: (props.marginTop)}}>
           
            <PostContent nLike={12} nComment={5} nBookmark={1} mt={1}/>
            <PostContent nLike={4} nBookmark={0} mt={1}/>
            <PostContent nComment={5} nBookmark={1} mt={1}/>
            <br/><br/><br/><br/>
            
        </Box>
    );
}