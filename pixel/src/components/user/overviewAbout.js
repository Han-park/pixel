import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function OverviewAbout() {
  return (
    <div>
     <Typography variant="h5" gutterBottom component="div" sx={{ml: 1, mt: 3, fontSize: 20}}>
        About
      </Typography> 
      <Paper variant="outlined" sx={{ p: 3}}>
      " Work hard, be kind, and amazing things will happen. "<br/>
        반갑습니다. Carter 최동혁입니다!<br/>
        대학교에서 예술공학을 전공하고 있으며 말그대로 예술과 공학 둘 다 배우고 있습니다.<br/>
        C, 파이썬, 에프터이펙트, 마야를 배우고 있지만 //아직 예술공학적인게 무엇인지 잘 모르겠습니다.<br/>
        요즘 빠진 강의는 비주얼 컴퓨팅 입니다.<br/>
        디지털 이미지 프로세싱, 3d reconstruction등 이미지를 데이터화 시키고, 그걸 편집하는 것에서 재미를 느낍니다.<br/>
        꿈은 있고 원하는 직업은 아직 없는 상태이지만 아마 이쪽 분야로 가게 되지 않을까요?<br/>
        이상적인 ENFJ 입니다. 너무 이상적인 것 같으면 얘기해주세요 :D<br/>
        또한 생각이 많은 편입니다. 깊고 좋은 생각인지는 모르겠으니 좀 더 생각 해볼게요.<br/>
        사람들이랑 같이 프로젝트를 진행하는것을 좋아하고, 스스로 성장할 수 있는 가장 좋은 방법이라고 생각합니다.<br/>
        여러분들과 함께 성장하며 좋은 시간을 보낼 수 있었으면 좋겠습니다. 잘 부탁드립니다!<br/>

      </Paper>
    </div>
  );
}