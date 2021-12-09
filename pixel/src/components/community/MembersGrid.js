import React from "react";
import { Link as RouterLink } from "react-router-dom";

import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    component: 'button'
  }));

export default function MembersGrid(){
    return(
        <div>
             <Grid container spacing={1}>

            <Grid item sm={6} xs={12}>
            <Item><Link component={RouterLink} to='/u:carter'>Carter</Link></Item>
            </Grid>
            <Grid item sm={6} xs={12}>
            <Item>Carter</Item>
            </Grid>
            <Grid item sm={6} xs={12}>
            <Item>Carter</Item>
            </Grid>
            <Grid item sm={6} xs={12}>
            <Item>Carter</Item>
            </Grid>

             </Grid>     
        </div>
    );
}