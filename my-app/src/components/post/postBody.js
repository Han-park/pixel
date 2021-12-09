import * as React from 'react';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';


import Typography from '@mui/material/Typography';


export default function PostBody(props){

var render = [];
var i = 0;


  for (i; i < props.data.item.description.length; i++){
    switch (props.data.item.description[i].type){
      case 'text':

        const splitedArray = props.data.item.description[i].content.split('<br/>')      
    

        render.push(
          <CardContent key={i} sx={{pb: 0, pt: 1}}>
          <Typography paragraph sx={{mt: 0, mb: 0}}>   

            {splitedArray.map((string, index) => (
                <div>{string}</div>
            ))}
              </Typography>
              </CardContent>      
          );
      break;

      case 'image':
         render.push(
          <CardMedia key={i} sx={{width: '500px', display: 'block', marginRight: 'auto', marginLeft: 'auto', objectFit: 'contain', mt: 2, mb: 2}} component='img' image={props.data.item.description[i].content}/>
          );
      break;
    }
  }

    return(
      <div>
        {render}
      </div>
    );
}