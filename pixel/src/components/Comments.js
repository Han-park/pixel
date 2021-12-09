import React from "react";
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <Button {...other} />;
  })(({ theme, expand }) => ({
    display: !expand ? 'inline' : 'none',
  }));

export default function Comments(){

    const [expanded, setExpanded] = React.useState(false);
    
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return(
        <div>
            <div>
            <Avatar sx={{ width: 30, height: 30, mt: 4, ml: 1, mb: 3.5, display: 'inline-block'}} aria-label="recipe"  src="http://hanparkinfo.cafe24.com/pixel/songvatar.png"/>
            <Box sx={{display: 'inline-block', ml: 1, maxWidth: '500px'}}>
            <Typography variant="body1" sx={{pt:1, pl:0.5, display: 'inline'}}><b>Zoey</b></Typography>
            <Typography variant="body1" sx={{pt:1, pl:0.5, display: 'inline', color: '#777'}}>&nbsp;2d</Typography>
                <Paper elevation={0} sx={{backgroundColor: '#F0F2F5', p: 0.8, borderRadius: 4}}>
                    
                    <Typography variant="body1">오늘의 단축어 섹션 너무 귀엽다! 맥으로 접근하는거면 todo mate도 좋지만 workflowy도 단축키가 잘 되어있어서 쓰기 편해!</Typography>
                </Paper>
            </Box>
            </div>

            <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            
            sx={{fontSize: 16, color: '#888', ml: 1, mt: 1}}
            >
            댓글 1개 더보기
            </ExpandMore>

            <Collapse in={expanded} timeout="auto" unmountOnExit>  
            <div>  
            <Avatar sx={{ width: 30, height: 30, mt:2, ml: 1, mb: 1, display: 'inline-block'}} aria-label="recipe"  src="http://hanparkinfo.cafe24.com/pixel/hyovatar.png"/>
            <Box sx={{display: 'inline-block', ml: 1, maxWidth: '500px'}}>
            <Typography variant="body1" sx={{pt:1, pl:0.5, display: 'inline'}}><b>효림</b></Typography>
            <Typography variant="body1" sx={{pt:1, pl:0.5, display: 'inline', color: '#777'}}>&nbsp;11h</Typography>
                <Paper elevation={0} sx={{backgroundColor: '#F0F2F5', p: 0.8, borderRadius: 4}}>
                    
                    <Typography variant="body1">오옹!! 추천 감사 !! 써볼게!!</Typography>
                </Paper>
            </Box>
            </div>
            </Collapse>        
        </div>
    );
}