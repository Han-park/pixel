import React from "react";
import "./Trending.css";
import Box from '@mui/material/Box';
import TrendingComponent from "../TrendingComponent";
import Link from '@mui/material/Link';
import { Typography } from "@mui/material";

export default function Trending(){
    return(
        // <div className="Trending">
            <Box sx={{ display: {
                // sm: 'none',
                md: 'block' } }} className="Trending">
                <Typography variant="h5" className="title"><b>최근 덧글</b></Typography>
                <TrendingComponent/>
                <Link href="#" color="#349BF0" underline="none"
                    variant="body2"
                    noWrap
                    display='block'
                    align="center"
                >
                    더보기
            </Link>
            </Box>
        // </div>
    );
}