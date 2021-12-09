import React from "react";
import "./ExploreGrid.css";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { Link as RouterLink } from "react-router-dom";

import GridContent from "./PostThumbnail";


export default function ExploreGrid(props){
    const { ml, md, sm, xs } = props;

    return(
            <Box className="GridBox" sx={{ml: (ml)}}>
            <Grid container spacing={2} elevation={1} >

                <Grid item md={(md)} sm={(sm)} xs={(xs)}>
                    <Link component={RouterLink} to="/p:123456" underline="none">
                    <GridContent className="GridContentBox"/>
                    </Link>
                </Grid>

                <Grid item md={(md)} sm={(sm)} xs={(xs)}>
                    <GridContent />
                </Grid>
                
                <Grid item md={(md)} sm={(sm)} xs={(xs)}>
                    <GridContent />
                </Grid>
                
                <Grid item md={(md)} sm={(sm)} xs={(xs)}>
                    <GridContent />
                </Grid>

                <Grid item md={(md)} sm={(sm)} xs={(xs)}>
                    <GridContent />
                </Grid>

                <Grid item md={(md)} sm={(sm)} xs={(xs)}>
                    <GridContent />
                </Grid>

                <Grid item md={(md)} sm={(sm)} xs={(xs)}>
                    <GridContent />
                </Grid>

                <Grid item md={(md)} sm={(sm)} xs={(xs)}>
                    <GridContent />
                </Grid>

                <Grid item md={(md)} sm={(sm)} xs={(xs)}>
                    <GridContent />
                </Grid>

                <Grid item md={(md)} sm={(sm)} xs={(xs)}>
                    <GridContent />
                </Grid>

                <Grid item md={(md)} sm={(sm)} xs={(xs)}>
                    <GridContent />
                </Grid>

                <Grid item md={(md)} sm={(sm)} xs={(xs)}>
                    <GridContent />
                </Grid>

                <Grid item md={(md)} sm={(sm)} xs={(xs)}>
                    <GridContent />
                </Grid>
                
            </Grid>
            
            </Box>
        
    );
}