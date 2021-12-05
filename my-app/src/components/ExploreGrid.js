import React from "react";
import FeedContent from "./FeedContent";
import "./ExploreGrid.css";

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import GridContent from "./GridContent";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function ExploreGrid(props){
    const { ml, md, sm, xs } = props;

    return(
            <Box className="GridBox" sx={{ml: (ml)}}>
            <Grid container spacing={2} elevation={1} >

                <Grid item md={(md)} sm={(sm)} xs={(xs)}>
                    <GridContent className="GridContentBox"/>
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