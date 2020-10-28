import React from 'react';
import './styles/app.scss'
import Overlay from './components/Overlay/overlay';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BoxItem from './components/BoxItem/boxItem';


function App() {

  
  return (
  <>
    <Router>
      <Switch>
        <Route exact path="/" component={Overlay} />
        <Route  path="/projects/:id" component={BoxItem} />
      </Switch>
    </Router>
  </>
  );
}

export default App;
