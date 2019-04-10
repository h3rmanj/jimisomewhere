import React from 'react';
import { Link } from 'react-router-dom';
import ContactFields from './ContactFields';
import './styles.css';
import jimi from '../../../img/jimi3.jpg'

export default () =>
	<div className="Contact">
		<div className="ContactWrapper">
			<img className="ContactJimi" src={jimi} alt="Jimi Somewhere"/>
			<ContactFields />
			<div className="back">
				<Link to="/">BACK</Link>
			</div>
		</div>
	</div>;
