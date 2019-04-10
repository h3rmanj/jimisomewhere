import React from 'react';
import { Link } from 'react-router-dom';
import ContactFields from '../Desktop/Contact/ContactFields';

const Contact = () =>
    <div className="Contact Mobile">
      <ContactFields/>
			<div className="back">
				<Link to="/">BACK</Link>
			</div>
    </div>

export default Contact;
