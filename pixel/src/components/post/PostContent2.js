import * as React from 'react';
import { styled } from '@mui/material/styles';

import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';

import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

import Comments from "../Comments";

import postData from "../../dataExample/postExample-1.json"; 


const title = postData.item.title;
const blogLink = postData.item.link;

const author = postData.item.author;
// const pubDate = postData.item.pubDate;

const blogName = "류효림의 블로그";
const pubTimeBefore = "2h";


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <Button {...other} />;
})(({ theme, expand }) => ({
  display: !expand ? 'inline' : 'none',
}));


function PostRender(props){



  var render = [];
  var i = 0;
  var j = 0;
  
    for (i; i < props.data.item.description.length; i++){
      switch (props.data.item.description[i].type){

        default:
          break;

        case 'text':
  
          const splitedArray = props.data.item.description[i].content.split('<br/>')      
      
  
          render.push(
            <CardContent key={i} component='text'>
            <Typography paragraph sx={{mt: 0, mb: 0, pl: 2, pb: 2}}>   
              {splitedArray.map((string, index) => (
                  <div>{string}</div>
              ))}
              
            </Typography>
            </CardContent>      
            );
        break;
  
        case 'image':
           render.push(
            <CardMedia key={i} sx={{width: '500px',
            display: 'block', marginRight: 'auto',
            marginLeft: 'auto', objectFit: 'contain', mt: 2, mb: 2}}
            component='img' image={props.data.item.description[i].content}/>
            );
        break;
      }
    }

    if(props.state === "preview"){
    
    var Texts = render.filter(element => element.props.component === 'text');
    var Imgs = render.filter(element => element.props.component === 'img');
    var render = [];

      if(Imgs.length > 0){
        for(j; j < 2 ; j++){
         render.push(Texts[j]);
        }
          if(Imgs.length > 1){
            render.push(props.btn);
          }
        render.push(Imgs[0]);
        }else{
        for(j; j < 5 ; j++){
           render.push(Texts[j]);
        }
          if(Texts.length > 5){
          render.push(props.btn);
          }
      }
    }
  
      return(
        <div>
          {render}
        </div>
      );
}


export default function PostContent(props) {

  function ExpandMoreButton(){
    return(
      <Collapse in={clicked === 'preview'}>
        <ExpandMore
  
        onClick={handleExpandClick}
        aria-expanded={clicked}
        aria-label="show more"
        sx={{fontSize: 16, color: '#349BF0', mt: -4}}
        >
        ... 더보기
 
        </ExpandMore>
      </Collapse>
    );
  } 

  const [clicked, setClicked] = React.useState('preview');

  const handleExpandClick = () => {
    setClicked('full');
  };


  return (
    <Box>
    <Paper sx={{ borderRadius: 2, margin: 1, mt: (props.mt), p: 2}} elevation="1"
      className="PostBox">

      <CardHeader sx={{marginTop: 2, marginBottom: -2}}
        avatar={
          <Avatar sx={{ width: 24, height: 24}} aria-label="recipe"  src="http://hanparkinfo.cafe24.com/pixel/hyovatar.png"/>
        }
        title={<Typography variant="body1" color="text.primary" sx={{ ml: -1}}>
            {author} ∙ {pubTimeBefore}
        </Typography>}
      />
        <CardContent>
        <Typography variant="h5" color="text.primary">
        {title}
        </Typography>
        <Link href={blogLink} underline="always" color="text.secondary" sx={{display: 'block', marginTop: '2px'}}>
        {blogName}
        </Link>
      </CardContent>

        {/* ********** 위에까지 Header *********** */}



      <PostRender data={postData}
      state={clicked}
      btn={<ExpandMoreButton/>}/>


      <Divider sx={{ml: 1, mr: 1}}/>


      <CardActions>
      <Stack direction="row" spacing={14} sx={{m: 'auto'}}>

          <div className="iconElement">
          <Button aria-label="add to favorites" sx={{color: '#777'}}>
          <FavoriteIcon/> <Typography variant="body1" sx={{ml: 0.8}}>{props.nLike}</Typography>
          </Button>
          </div>

          <div className="iconElement" >
        <Button aria-label="comment"sx={{color: '#777'}}>
        <ModeCommentOutlinedIcon sx={{width: 22, pt: 0.2}}/><Typography variant="body1" sx={{ml: 0.8}}>{props.nComment}</Typography>
        </Button>
        </div>

        <div className="iconElement">
        <Button aria-label="share" sx={{color: '#777'}}>
          <BookmarkBorderIcon /><Typography variant="body1" sx={{ml: 0.8}}>{props.nBookmark}</Typography>
        </Button>
        </div>

      </Stack>
      
      </CardActions>

      <Divider sx={{ml: 1, mr: 1}}/>

    
      <Comments/>

      <br/>
    </Paper>
    </Box>

  );
}