import React from 'react';
import './App.css';
import Main from './components/Main'
import Contact from './components/Contact'
import Dates from './components/TourDates'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import jimi4 from './img/jimi4.png';
import jimi3 from './img/jimi3.jpg'

export default () =>
	<Router>
		<div className="App">
			<Route path="/" component={Main} />
			<Route path="/dates" component={Dates} />
			<Route path="/contact" component={Contact} />
			<img style={{width: "0"}} alt="jimi3" src={jimi3} />
			<img style={{width: "0"}} alt="jimi4" src={jimi4} />
		</div>
	</Router>
