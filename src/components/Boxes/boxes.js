import React from 'react';
import {ReactComponent as ArrowNext} from '../../assets/arrow-right.svg'
import {ReactComponent as ArrowPrev} from '../../assets/arrow-left.svg'


const creations = [
 
  {
    id: 1,
    title: "JavaScript Project",
    img: 'cartography'
  },
  {
    id: 2,
    title: "Watch People",
    img: 'watchpeople'
  },
  {
    id: 3,
    title: "MusicRoom",
    img: 'musicroom'
  }

]


const Boxes = () => {

  return (

      <section className="boxes">
        <div className="container-fluid">
          {/* <div className="boxes-nav">
            <div className="boxes-arrow prev disabled">
              <ArrowPrev/>
            </div>
            <div className="boxes-arrow next">
              <ArrowNext/>
            </div>
          </div> */}
          <div className="row">
            {creations.map(items => {
            return(
            
              <div className="box" key={items.id}>
                <div className="box-details" key={items.id}>
                  <h2>{items.title}</h2>
                </div>
                <div className="box-image">
                  <img alt="portfolio" src={require(`../../assets/${items.img}.png`)}/>
                </div>
              </div>
      
              )
            })} 
          </div>
        </div>
      </section>
  
  );
};

export default Boxes;