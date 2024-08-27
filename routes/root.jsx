  import React from 'react';
  import { Outlet } from "react-router-dom";
  import Navbar from '../src/Components/Navbar/Navbar';
  import Bottombar from '../src/Components/Bottombar/Bottombar';
  import './root.css';


  export default function Root() {
    return (
      <>
        <Navbar></Navbar>
        <div id="detail">
          <Outlet />
        </div>
        <Bottombar></Bottombar>
      </>
    );
  }
