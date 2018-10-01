import React from 'react';
import './App.css';
import Main from './components/Main'
import Contact from './components/Contact'
import Dates from './components/TourDates'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

export default () =>
	<Router>
		<div className="App">
			<Route path="/" component={Main} />
			<Route path="/dates" component={Dates} />
			<Route path="/contact" component={Contact} />
		</div>
	</Router>
