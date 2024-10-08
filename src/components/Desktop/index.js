import React from 'react';
import Main from './Main';
import Music from './Music';
import Contact from './Contact';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import jimi3 from '../../img/jimi3.jpg'
import Shows from './Shows';

const Desktop = () => (
  <Router hashType="noslash">
    <div className="App">
      <Route path="/" component={Main} />
      <Route path="/(music|booklet)" component={Music} />
      <Route path="/contact" component={Contact} />
      <Route path="/shows" component={Shows} />
      
      <img style={{width: "0"}} alt="jimi3" src={jimi3} />
    </div>
  </Router>
);

export default Desktop;
