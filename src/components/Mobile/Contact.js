import React from 'react';
import { Link } from 'react-router-dom';
import ContactFields from '../Desktop/Contact/ContactFields';
import '../Desktop/Contact/styles.css';

const Contact = () =>
    <div className="Contact Mobile">
      <ContactFields/>
			<div className="back">
				<Link to="/">BACK</Link>
			</div>
    </div>

export default Contact;
