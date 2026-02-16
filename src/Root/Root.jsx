import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Header/Navbar';
import GalaxyBackground from '../components/utilities/animate_bg';

const Root = () => {
  return (
    <div>
       <GalaxyBackground></GalaxyBackground>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;