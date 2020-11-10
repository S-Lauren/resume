import gsap from 'gsap/gsap-core';
import React, { useEffect } from 'react';
import Banner from '../Banner/banner';
import Boxes from '../Boxes/boxes';
import Header from '../Header/header';

const Overlay = () => {
  useEffect(() => {

    const tl =  gsap.timeline();
    tl.from('.line span',{
      opacity: 0,
      duration: 1.8,
      y: 100,
      ease: "CircInOut",
      skewY: 2,
      delay: 1,
      stagger: {
        amount: 0.3
      }
    }).to(".overlay-top", {
      duration: 1.6,
      height: 0,
      stagger: 0.4,
      ease: "expo.inOut"
    }).to(".overlay-bottom", {
      duration: 1.6,
      width: 0,
      delay: -0.8,
      ease: "expo.inOut",
      stagger: {
        amout: .4
      }
    }).from(".box-details h2",{
      opacity: 0, 
      ease: 'expo.inOut',
      duration: 1,
      stagger: {
        amount: .2
      }
    }).from(".box-image img", {
      scale: 1.4,
      delay: -.2,
      duration: 1.6,
      ease: 'expo.inOut',
      stagger: {
        amount: .4
      }
    })

  }, [])
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