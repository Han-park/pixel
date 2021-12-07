import * as React from 'react';

import Feed from "../components/main/Feed";

import Header from "../components/Header2";

import Paper from '@mui/material/Paper';
import BottomNav from "../components/BottomNav";

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import MainMobileHeader from '../components/main/MainMobileHeader';
import "./Pages.css";
import PostContent from "../components/PostContent";

import GlobalStyles from '@mui/material/GlobalStyles';
import { maxWidth } from '@mui/system';



 

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
                <div className="feedContainer" >
                      <PostContent nLike={12} nComment={5} nBookmark={1} sx={{mt: 10}}/>
                      
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