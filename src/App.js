import React from "react";

import { Routes, Route, browserRouter, BrowserRouter } from "react-router-dom";
import Registration from "./Components/Registration";
import Connection from "./Components/Connection";
import Architecture from "./Components/Architecture";

export default function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/"exact element={<Registration/>}></Route>
          <Route path="/Connection"exact element={<Connection/>}></Route>
          <Route path="/Architecture"exact element={<Architecture/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
