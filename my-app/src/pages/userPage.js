import React from "react";
// import Image from 'material-ui-image' 이거 material ui 1.0 버전에 맞춰 만들어진 거다.
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Header from "../components/Header2";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import CarterCover from "../imgExample/carterCover.png"
import UserBio from "../components/user/userBio";
import UserTab from "../components/user/userTab";

// import Paper from '@mui/material/Paper';
import BottomNav from "../components/BottomNav";

import GlobalStyles from '@mui/material/GlobalStyles';

import "./userPage.css";

export default function UserPage(){
    return(
        <div>
        <GlobalStyles styles={{ body: { backgroundColor: "#F0F2F5" } }} />   
           <Header />
        <div>
        <div className="userBio">
            <UserBio/>
        </div>
        <Container maxWidth="md" className="container">
            
                     <Paper elevation={0} sx={{mt: 8}}>
                         <img className="coverImg" src={CarterCover} alt="CarterCover" />
                     </Paper>
                        <div className="nameText">
                        <Typography variant="h3" gutterBottom component="div" sx={{textAlign: 'center', color: 'white'}}>
                            Carter
                            {/* 이거 정렬 문제 해결해야 함. margin: auto로 해결 안됨. */}
                        </Typography>
                        </div>

                    <UserTab />

                   

                
                {/* <div className="feedContainer">
                    <Feed/>
                </div>
                
                <div className="trendingContainer">
                    <Trending />
                </div> */}
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