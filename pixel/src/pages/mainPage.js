import * as React from 'react';

import Feed from "../components/main/Feed";
import Trending from "../components/main/Trending";

import Header from "../components/Header2";

import Paper from '@mui/material/Paper';
import BottomNav from "../components/BottomNav";

import Container from '@mui/material/Container';

import MainMobileHeader from '../components/main/MainMobileHeader';
import "./Pages.css";

import GlobalStyles from '@mui/material/GlobalStyles';



 

export default function MainPage(props){
    return(

        <div>

        <GlobalStyles styles={{ body: { backgroundColor: "#F0F2F5" } }} />

        <div className="MainDesktopHeader">   
           <Header />
        </div>
        <div className="MainMobileHeader">
            <MainMobileHeader />
        </div>
        <Container maxWidth="md" className="container">
                <div className="feedContainer">
                    <Feed maxWidth={610} marginTop={-2}/>
                </div>
                
                <div className="trendingContainer">
                    <Trending />
                </div>
        </Container>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3} className="bottom">
        <BottomNav />
        </Paper>

        <script src="http://code.jquery.com/jquery-latest.min.js"></script>

        <script>
            
        </script>
        {/* </div> */}
        </div>

        // </ThemeProvider>
    );
}