import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export default function AlignItemsList() {
  return (
    <List

    >
        <ListItemButton sx={{display: 'block', padding: '10px 20px'}}>
        <Typography
                component="span"
                variant="caption"
                color="#757575"
              >
                페이스북의 사명 변경??
              </Typography>
        <Typography
                sx={{display: 'block'}}
                component="span"
                variant="body2"
                color="text.primary"
              >
                효림: 페이스북이 방향을 증강현실로 튼게 레버리지라는 관점을 최근에 ...
              </Typography>
        <Typography
                component="span"
                variant="caption"
                color="#757575"
              >
                just now
              </Typography>
        </ListItemButton>
        <Divider component="li" />

        <ListItemButton sx={{display: 'block', padding: '10px 20px'}}>
        <Typography
                component="span"
                variant="caption"
                color="#757575"
              >
                MIT 35 Innovators Under 35 - Judges ...
              </Typography>
        <Typography
                sx={{display: 'block' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                효림: 35세,, 13년 남았다 드릉드릉
              </Typography>
        <Typography
                component="span"
                variant="caption"
                color="#757575"
              >
                7 minutes ago
              </Typography>
        </ListItemButton>
        <Divider component="li" />

        <ListItemButton sx={{display: 'block', padding: '10px 20px'}}>
        <Typography
                component="span"
                variant="caption"
                color="#757575"
              >
                iMAC적응기(1) 아이맥을 사다!
              </Typography>
        <Typography
                sx={{display: 'block' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                종한: ㅋㅋㅋㅋㅋ 오늘의 단축어 섹션 너무 귀엽다. 맥으로 접근하는거면 t ...
              </Typography>
        <Typography
                component="span"
                variant="caption"
                color="#757575"
              >
                10 hours ago
              </Typography>
        </ListItemButton>
        <Divider component="li" />

        <ListItemButton sx={{display: 'block', padding: '10px 20px'}}>
        <Typography
                component="span"
                variant="caption"
                color="#757575"
              >
                Pixel.site 디자인 스터디(업데이트 중)
              </Typography>
        <Typography
                sx={{display: 'block' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                종한: 작업중인데 상당히 재밌음. 집중할 시간이 많이 필요해.
              </Typography>
        <Typography
                component="span"
                variant="caption"
                color="#757575"
              >
                October 22
              </Typography>
        </ListItemButton>
        <Divider component="li" />
      
      
      
    </List>
  );
}