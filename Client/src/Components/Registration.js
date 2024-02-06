import React from 'react';
import Sidenav from './Sidenav';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import MyForm from './Myform';
import styles from './styles.module.css';

import { blueGrey } from '@mui/material/colors';



export default function Registration() {
  return (
    <>
    <div >
    <Navbar />
      <Box height={70}/>
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main"  sx={{ flexGrow: 1, p: 3, backgroundColor:'#f8f8f8'}} >
        <MyForm />
        </Box>
      </Box>
      </div>
  </>
  );
}
