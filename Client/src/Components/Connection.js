import React from 'react';
import Sidenav from './Sidenav';
import { Box,} from '@mui/material';
import Navbar from './Navbar';
import Connectionform from './Connectionform'


export default function Connection() {
  return (
    <>
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: "flex" , backgroundColor:'#f8f8f8'}}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor:'#f8f8f8' }}>
        <Connectionform/>
        </Box>
      </Box>
      
    </>
  );
}
