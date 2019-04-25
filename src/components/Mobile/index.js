import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Main from './Main';
import Contact from './Contact';
import './styles.css';

const Mobile = () => (
  <Router hashType="noslash">
    <div className="MobileApp">
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Main} />
      </Switch>
    </div>
  </Router>
);


export default Mobile;
