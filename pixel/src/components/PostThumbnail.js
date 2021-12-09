import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

import Avatar from '@mui/material/Avatar';


import PublicIcon from '@mui/icons-material/Public';

export default function GridContent() {

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <Card className="GridContentBox" elevation={0} >
      <CardMedia
        component="img"
        height="140"
        image="http://hanparkinfo.cafe24.com/pixel/frog.png"
        alt="green iguana"
      />

      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          [유미의 세포들] 웅며드는 과정
        </Typography>
      </CardContent>
      <CardHeader sx={{mt: -3}}
        avatar={
          <Avatar sx={{ width: 20, height: 20}} aria-label="recipe"  src="http://hanparkinfo.cafe24.com/pixel/songvatar.png"/>
        }
        title={<Typography variant="body1" color="text.primary" sx={{ ml: -1}}>
            Zoey
        </Typography>}
      />

      <CardContent sx={{paddingTop: 0, mt: -1}}>
        <Chip label="생각" color="secondary" size="small" onClick={handleClick} sx={{margin: '2px'}}/>
        <Chip label="리뷰" color="success" size="small" onClick={handleClick} sx={{margin: '2px'}}/>
      {/* </Stack> */}
      </CardContent>

      <CardHeader sx={{mt: -2}}
        avatar={
          <PublicIcon sx={{ width: 20, height: 20}} color="action" aria-label="public"/>
        }
        title={<Typography variant="body1" color="text.secondary" sx={{ ml: '-12px'}}>
            Public
        </Typography>}
      />

    </Card>
  );
}