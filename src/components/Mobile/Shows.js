import React from 'react';
import { Link } from 'react-router-dom';

import '../Desktop/Contact/styles.css';
import ShowsFields from '../Desktop/Shows/ShowsFields';

const Shows = () =>
    <div className="Contact Mobile">
            
            <ShowsFields />
			<div className="back">
				<Link to="/">BACK</Link>
			</div>
    </div>

export default Shows;
