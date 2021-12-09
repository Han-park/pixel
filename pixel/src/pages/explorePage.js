import * as React from 'react';

import ExploreGrid from "../components/ExploreGrid";
import Tags from "../components/explore/Tags";
import Header from "../components/Header2";
import ExploreMobileHeader from "../components/explore/ExploreMobileHeader";
import Container from '@mui/material/Container';

import "./Pages.css";

import Paper from '@mui/material/Paper';
import BottomNav from "../components/BottomNav";
import GlobalStyles from '@mui/material/GlobalStyles';

  

export default function ExplorePage(props){
    return(
        <div>
         <GlobalStyles styles={{ body: { backgroundColor: "#F0F2F5" } }} />
            <div className="ExploreMobileHeader">
                <ExploreMobileHeader />
            </div>
          <div className="ExploreDesktopHeader">
                <Header />
         </div>
        <div>
   
        <Container maxWidth="xl" className="container">
                 <div className="tagContainer">
                        <Tags />
                    </div>
                <div className="exploreFeedContainer">
                    <ExploreGrid
                        ml={28}
                        md={4}
                        sm={6}
                        xs={12}
                    />
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