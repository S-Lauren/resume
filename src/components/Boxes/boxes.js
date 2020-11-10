import React from 'react';
import { Link } from 'react-router-dom';




export const creations = [
 
  {
    id: 1,
    title: "JavaScript Project",
    description: "WOaauhfeirflemrfojrigjgrlmjgermlkg ueihgreigner",
    img: ['cartography']
  },
  {
    id: 2,
    title: ["Watch People", "Search page"],
    description: [`WatchPeople is an application to keep track of prisoners. 
    The project was made with fake data and random user API for portrait 
    Coded in Reactjs and Material UI for CSS`, 
    "Tcheck tchek tchekitout"],
    img: ['watchpeople1', 'watchpeople2']
  },
  {
    id: 3,
    title: "MusicRoom",
    description: "Hype Shit Never Hype Bitch",
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
                  <img alt="portfolio" src={require(`../../assets/${items.img[0]}.webp`)}/>
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