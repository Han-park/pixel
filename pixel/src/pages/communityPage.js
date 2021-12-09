import * as React from 'react';

import Navs from "../components/community/CommunityNav";
import CommunityFeed from "../components/community/CommunityFeed";

import Header from "../components/Header2";
import Container from '@mui/material/Container';

import "./Pages.css";

import Paper from '@mui/material/Paper';
import BottomNav from "../components/BottomNav";


import GlobalStyles from '@mui/material/GlobalStyles';
  

export default function CommunityPage(props){
    return(
        <div>
         <GlobalStyles styles={{ body: { backgroundColor: "#F0F2F5" } }} />          
           <Header />
        <div>
        <Container maxWidth="lg" className="container">
            <div className="communityNavContainer">
                        <Navs/>
                    </div>
                <div className="communityFeedContainer">
                        <CommunityFeed />
                </div>
        </Container>

        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3} className="bottom">
        <BottomNav />
        </Paper>
           

        <script src="http://code.jquery.com/jquery-latest.min.js"></script>

        <script>
            
        </script>
        </div>
        </div>
    );
}