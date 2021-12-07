import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Stack from '@mui/material/Stack';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import Link from '@mui/material/Link';

import Divider from '@mui/material/Divider';

import Image from "../../imgExample/imacimg.png";
import Hyo from "../../imgExample/hyovatar.png";

import Comments from "../Comments";


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <Button {...other} />;
})(({ theme, expand }) => ({
  display: !expand ? 'inline' : 'none',
//   marginLeft: 'auto',
}));

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box>
    <Paper sx={{
        borderRadius: 2,
        margin: 1,
        p: 0.5}}
        elevation="1"
        >
      <CardHeader sx={{marginTop: 2, marginBottom: -2}}
        avatar={
          <Avatar sx={{ width: 24, height: 24}} aria-label="recipe"  src={Hyo}/>
        }
        title={<Typography variant="body1" color="text.primary" sx={{ ml: -1}}>
            효림 ∙ 2h
        </Typography>}
      />
        <CardContent>
        <Typography variant="h5" color="text.primary">
        iMAC적응기(1) 아이맥을 사다!
        </Typography>
        <Link href="#" underline="always" color="text.secondary" sx={{display: 'block', marginTop: '2px'}}>
        류효림의 블로그
        </Link>
      </CardContent>
      <CardMedia
        sx={{width: '500px', display: 'block', marginRight: 'auto', marginLeft: 'auto', objectFit: 'contain'}}
        component="img"
        image={Image}
        // alt="Paella dish"
      />
      <CardContent>
        <Typography paragraph>
        아이패드 + 매직키보드 조합으로 2년을 써왔어서 바로 적응할 줄 알았는데 생각보다 어려워서,, 차근차근 적응해나가면서 공부한 것들을 기록해보려 한다.
        </Typography>
        <Typography>우선 내가 가지고 있는 애플 기기들<br/>
        (2017.12 ~) iPhone XR 256GB<br/>
        (2019.07 ~) iPad pro 11in 64G<br/>
        </Typography>
      </CardContent>

      <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          sx={{fontSize: 16, color: '#349BF0', ml: 1}}
        >
          더 읽기
        </ExpandMore>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph sx={{marginTop: 0}}>
            (2020.05 ~) AirPod pro <br/>
            (2020.09 ~) Apple Watch<br/>
            (2021.10 ~) iMAC 512GB (NEW!)<br/>
            <br/>
            윈도우 노트북도 함께 사용하다가 <br/>
            코로나 이후 집에 있는 시간이 많아져서, 큰 화면을 보고싶어서, 예뻐서 구매하게 되었다.
          </Typography>
          <Typography paragraph>
          초기 설정을 마치고 지금까지 느낀 점을 남길게! <br/>
          <br/>
        1. 트랙패드 사용하기..불편해
        <br/>
            내가 다한증이 있어서 손이 항상 촉촉하거든 그 상태로 트랙패드를 쓰려니 생각보다 마찰이 느껴지더라구
            <br/>
            마우스 옵션을 빼고 구입했었는데 이 문제 때문에 반품하고 재구매를 고려중이야 (일단 3주정도는 써보려구!)
            <br/>  <br/>
        2. 화면 커! 화질 좋아! 짱@!
        <br/>
            아이패드도 가장 큰 옵션이 아니라 11인치를 쓰고있어서 작은 화면이라고 생각 안하고 있었는데
            <br/>
            아이맥 쓰다가 아이패드 보니까 어찌나 작던지,, 최고야 큰화면과 빵빵한 스피커!
            <br/>  <br/>
        3. 빠릿 빠릿
        <br/>
            아직 본격적인 프로그램들은 사용하지 않았지만 시간이 꽤 오래걸리던 롬리서치나 웹서핑에서 속도가 빨라졌음을 느꼈어 ! 
            <br/>  <br/>
        4. 일기를 다시 써야지
        <br/>
            iOS어플 중에 MOODA라는 귀여운 일기 어플이 있는데 맥 어플이 따로 지원되거든
            <br/>
            한동안 안쓰던 글 일기를 다시 쓸 것 같아

                </Typography>
        </CardContent>
      </Collapse>

      <Divider sx={{ml: 1, mr: 1}}/>

      <CardActions>
      <Stack direction="row" spacing={10} sx={{m: 'auto'}}>

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

      {/* Comment */}
      <Comments/>

      <br/>

      {/* <Divider /> */}

    </Paper>
    </Box>

  );
}