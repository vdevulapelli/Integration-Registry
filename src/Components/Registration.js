import React from 'react';
import Sidenav from './Sidenav';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import MyForm from './Myform';
import '../Custom.css';



export default function Registration() {
  return (
    <>
    <div height={70} >
    <Navbar />
      <Box height={70}/>
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <MyForm />
        </Box>
      </Box>
      </div>
  </>
  );
}
