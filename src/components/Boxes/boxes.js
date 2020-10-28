import React from 'react';
import { Link } from 'react-router-dom';




export const creations = [
 
  {
    id: 1,
    title: "JavaScript Project",
    img: ['cartography']
  },
  {
    id: 2,
    title: "Watch People",
    img: ['watchpeople1', 'watchpeople']
  },
  {
    id: 3,
    title: "MusicRoom",
    img: [ 'musicroom']
  }

]


const Boxes = () => {
  return (
      <section className="boxes">
        <div className="container-fluid">
          <div className="row">
            {creations.map(items => {
            return(
            <Link to={{ pathname: `/projects/${items.id}`,  state: {data: items}}}>
              <div className="box">
                <div className="box-details" key={items.id}>
                  <h2>{items.title}</h2>
                </div>
                <div className="box-image">
                  <img alt="portfolio" src={require(`../../assets/${items.img[0]}.png`)}/>
                </div>
              </div>
            </Link>
              )
            })} 
          </div>
        </div>
      </section>
  
  );
};

export default Boxes;