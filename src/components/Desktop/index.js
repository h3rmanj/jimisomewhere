import React from 'react';
import Main from './Main';
import Music from './Music';
import Contact from './Contact';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import jimi3 from '../../img/jimi3.jpg'

const Desktop = () => (
  <Router>
    <div className="App">
      <Route path="/" component={Main} />
      <Route path="/music" component={Music} />
      <Route path="/contact" component={Contact} />
      <img style={{width: "0"}} alt="jimi3" src={jimi3} />
    </div>
  </Router>
);

export default Desktop;
