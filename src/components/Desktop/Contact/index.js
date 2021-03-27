import React from 'react';
import { Link } from 'react-router-dom';
import ContactFields from './ContactFields';
import './styles.css';
import contactBG from '../../../img/contact_page.png'

export default () =>
	<div className="Contact">
		<img className="bgImage" src={contactBG} alt="contactBG"/>
		<div className="ContactWrapper">
		
			<ContactFields />
			<div className="back">
				<Link to="/">BACK</Link>
			</div>
		</div>
	</div>;
