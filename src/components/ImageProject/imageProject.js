import React, { useEffect, useRef } from 'react';
import './imageProject.scss'
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import {TimelineLite, Power2} from 'gsap'; 

const ImageProject = ({img}) => {

  let container = useRef(null)
  let containerImg = useRef(null)
  let imgRev = useRef(null)
  let reveal = CSSRulePlugin.getRule('.img-container:after')
  const tl = new TimelineLite()

  useEffect(() => {

   tl.to(container,  {
      css: {visibility: 'visible'},
      duration: 1,
    }).to(imgRev, {
      css: {visibility: 'visible'}, 
      duration: 1, 
    }).to(reveal, {
      duration: 1.2, 
      width: "0%", 
      ease: Power2.easeInOut
    }).from(containerImg, {
      duration: .8, 
      scale: 1.6
    })
  })

  return (
    <div className="main-2">
      <div ref={el => container = el} className="container-2">
        <div ref={ref => imgRev = ref} className="img-container">
          <img alt="creation" ref={el => containerImg = el} src={require(`../../assets/${img[0]}.png`)}/>
        </div>
      </div>    
    </div>
  );
};

export default ImageProject;