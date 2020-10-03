import React from 'react';
import Banner from '../Banner/banner';
import Boxes from '../Boxes/boxes';
import Header from '../Header/header';

const Overlay = () => {
  return (
    <>
    <div className="intro">
      <div className="top">
        <div className="overlay-top"></div>
        <div className="overlay-top"></div>
        <div className="overlay-top"></div>
        <Header />
       <Banner/>
      </div>
      <div className="bottom">
        <Boxes/>
        <div className="overlay-bottom"></div>
        <div className="overlay-bottom"></div>
        <div className="overlay-bottom"></div>
      </div>
    </div>   
  </>
  );
};

export default Overlay;