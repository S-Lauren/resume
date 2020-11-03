import React, { useRef, useState } from 'react';
import './slider.scss'; 
import {TweenLite,Power3} from 'gsap'; 
import {ReactComponent as ArrowLeft} from '../../assets/arrow-left-white.svg';
import {ReactComponent as ArrowRight} from '../../assets/arrow-left-white.svg';

const Slider = ({data}) => {

  const [active, setActive] = useState({
      isActive1 : true,
      isActive2: false
  })

  let imageList = useRef(null)
  let textList = useRef(null)

  const slideRight =(index, duration, multiply=1) => {
    TweenLite.to(imageList.children[index], duration, {
      x: 600 * multiply, 
      ease: Power3.easeOut
    })
  }
  const slideLeft =(index, duration, multiply=1) => {
    TweenLite.to(imageList.children[index], duration, {
      x: -600 * multiply, 
      ease: Power3.easeOut
    })
  }
  const scale =(index, duration) => {
    TweenLite.from(imageList.children[index], duration, {
      scale: 1.2, 
      ease: Power3.easeIn
    })
  }

  const fadeOut = (index, duration) => {
    TweenLite.to(textList.children[index], duration, {
      opacity: 0, 
    
    })
  }
  const fadeIn = (index, duration) => {
    TweenLite.to(textList.children[index], duration, {
      opacity: 1, 
      delay: 1
    })
  }

 
  const handleNext = () => {
    if(imageList.children[0].classList.contains("active")) {
      setActive({isActive1: false, isActive2: true})
      slideLeft(0,1)
      slideLeft(1, 1)
      scale(1,1)
      fadeOut(0,1)
      fadeIn(1,1 )
    } else if (imageList.children[1].classList.contains("active")) {
      setActive({isActive1: true, isActive2: false})
    }
  }
  const handlePrev = () => {
    if(imageList.children[0].classList.contains("active")) {
      setActive({isActive1: false, isActive2: true})
    } else if (imageList.children[1].classList.contains("active")) {
      setActive({isActive1: true, isActive2: false})
      slideRight(0, 1, 0)
      slideRight(1, 1,2)
      scale(0,1)
      fadeOut(1,1)
      fadeIn(0,1 )
    }
  }


  return (
    <div className="slider-section">
      <div className="slider-container">
        <div className="btns left" onClick={handlePrev} >
          <span><ArrowLeft/></span>
        </div>
        <div className="slider-inner">
          <div className="slider-image">
            <ul ref={el => imageList = el}>      
              <li className={active.isActive1 ? 'active' : ''}><img src={require(`../../assets/${data.img[0]}.png`)} alt="project creation"/> </li>
              <li className={active.isActive2 ? 'active' : ''}><img src={require(`../../assets/${data.img[1]}.png`)} alt="project creation"/> </li>
            </ul>
          </div>
          <div className="slider-content">
            <ul ref={el => textList = el}>
              <li>
                <div className="slider-text">
                  <h3 className="title">{data.title[0]}</h3>
                  <h4 className="description">{data.description[0]}</h4>
                </div>
              </li>
              <li>
                <div className="slider-text">
                  <h3 className="title">{data.title[1]}</h3>
                  <h4 className="description">{data.description[1]}</h4>
                </div>
              </li>
            </ul>
          </div>

        </div>
        <div className="btns right" onClick={handleNext}>
          <span><ArrowRight/></span>
        </div>
      </div>
    </div>
  );
};

export default Slider;