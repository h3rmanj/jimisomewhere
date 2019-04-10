import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

const Mobile = () => (
  <Router>
    <div className="MobileApp">
      <Route path="/" />
    </div>
  </Router>
);


export default Mobile;
