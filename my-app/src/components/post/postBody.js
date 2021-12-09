import * as React from 'react';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';


import Typography from '@mui/material/Typography';

import Image from "../../imgExample/p123456-1.png";

import Comments from "../Comments";


export default function PostBody(props){


var render = [];
var i = 0;

  for (i; i < props.data.item.description.length; i++){
    switch (props.data.item.description[i].type){
      case 'text':
        render.push(
          <CardContent key={i} sx={{pb: 0, pt: 1}}>
          <Typography paragraph>
            <div dangerouslySetInnerHTML={{__html: props.data.item.description[i].content}} />
          </Typography> </CardContent>
          );
      break;

      case 'image':
         render.push(
          <CardMedia key={i} sx={{width: '500px', display: 'block', marginRight: 'auto', marginLeft: 'auto', objectFit: 'contain'}} component='img' image={props.data.item.description[i].content}/>
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