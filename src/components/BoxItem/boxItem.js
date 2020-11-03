import gsap from 'gsap';
import React, { useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import ImageProject from '../ImageProject/imageProject';
import Slider from '../Slider/slider';

const BoxItem = () => {

  const location = useLocation()
console.log(location.state.data)
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
      {/* <div className="project">
        <div className="container">
          <div className="row-2">
              <div className="project-detail">
                <div className="project-title">
                  <p>{location.state.data.title}</p>
                </div>
              </div> */}
              {/* <div className="project-detail-2"> */}
                <>
                  {/* <ImageProject img={location.state.data.img}/> */}
                  <Slider data={location.state.data}/>
                </>
              {/* </div> */}
          {/* </div>
        </div>
      </div> */}
    </div>
  );
};

export default BoxItem;