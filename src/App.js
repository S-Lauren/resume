import React, { useEffect } from 'react';
import './styles/app.scss'
import Header from './components/Header/header'
import Banner from './components/Banner/banner';
import Boxes from './components/Boxes/boxes';

function App() {

  useEffect(() => {
    let vh = window.innerHeight * .01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }, [])
  
  return (
  <>
    <div  className="test">
      <Header />
      <Banner/>
      <Boxes/>
    </div>
  </>
  );
}

export default App;
