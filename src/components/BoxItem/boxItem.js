import gsap from 'gsap';
import React, { useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import ImageProject from '../ImageProject/imageProject';

const BoxItem = () => {

  const location = useLocation()

  useEffect(() => {
    const tl = gsap.timeline(); 
    tl.from(".overlay", {
      duration: .8,

      width: 0,
      ease: "expo.inOut",
      stagger: {
        amount: .2
      }
    }).from('.project-title p', {
      skexY: 7,
      opacity: 0,
      delay: .9,
      duration: .8,
      y: 100, 
      stagger: {
        amount: .2
      }
    })
  }, [])
 
  return (
    <div className="overlay">
      <div className="project">
        <div className="container">
          <div className="row">
              <div className="project-detail">
                <div className="project-title">
                  <p>{location.state.data.title}</p>
                </div>
              </div>
              <div className="project-detail-2">
                <>
                  <ImageProject img={location.state.data.img}/>
                </>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxItem;