import * as React from 'react';
import Chip from '@mui/material/Chip';

export default function Chips() {
    const handleClick = () => {
      console.info('You clicked the Chip.');
    };
  
    return (
        <div>
      <div className="tagsContainer">
        <Chip label="#트렌드" onClick={handleClick} sx={{backgroundColor: 'white', border: '1px solid #bdbdbd', margin: 0.3}}/>
        <Chip label="#공간" onClick={handleClick} sx={{backgroundColor: 'white', border: '1px solid #bdbdbd', margin: 0.3}}/>
        <Chip label="#테크" onClick={handleClick} sx={{backgroundColor: 'white', border: '1px solid #bdbdbd', margin: 0.3}}/>
        <Chip label="#사회관계망" onClick={handleClick} sx={{backgroundColor: 'white', border: '1px solid #bdbdbd', margin: 0.3}}/>
        <Chip label="#생각" onClick={handleClick} sx={{backgroundColor: 'white', border: '1px solid #bdbdbd', margin: 0.3}}/>
        <Chip label="#프로그래밍" onClick={handleClick} sx={{backgroundColor: 'white', border: '1px solid #bdbdbd', margin: 0.3}}/>
        <Chip label="#메모" onClick={handleClick} sx={{backgroundColor: 'white', border: '1px solid #bdbdbd', margin: 0.3}}/>
        <Chip label="#디자인" onClick={handleClick} sx={{backgroundColor: 'white', border: '1px solid #bdbdbd', margin: 0.3}}/>
        <Chip label="#iMac" onClick={handleClick} sx={{backgroundColor: 'white', border: '1px solid #bdbdbd', margin: 0.3}}/>
        </div>
      </div>
    );
  }