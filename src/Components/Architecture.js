import React from "react";
import Sidenav from "./Sidenav";
import { Box } from "@mui/material";
import Navbar from "./Navbar";
import "../Custom.css";


export default function Architecture() {
  return (
    <>
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h7>Architecture</h7>
        </Box>
      </Box>
    </>
  );
}
