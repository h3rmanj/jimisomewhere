import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';


export default class extends Component {
	render = () =>
    <div className="Contact">
    <div className="ContactWrapper">
        
        
        <div className="back">
            <Link to="/">BACK</Link>
        </div>
    </div>
</div>;
}
