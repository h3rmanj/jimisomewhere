import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import jimi from '../../img/jimi3.jpg'

const ContactField = ({title, at}) =>
	<div className="ContactField">
		{title}: <br />
		{at}
	</div>

export default () =>
	<div className="Contact">
		<div className="ContactWrapper">
			<img className="ContactJimi" src={jimi} alt="Jimi Somewhere"/>
			<div className="ContactFields" >
				<Link to="/"><i className="fas fa-arrow-left"/></Link>
				<ContactField title="management / press" at="michael@brusjan.no" />
				<ContactField title="booking" at="morten@ufa.no" />
				<ContactField title="other" at="jimisomewhere@gmail.com" />
				<ContactField title="all social media" at="@jimisomewhere" />
			</div>
		</div>
	</div>;
