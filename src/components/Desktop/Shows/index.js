import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import showsBG from '../../../img/shows_page.png'
import ShowsFields from './ShowsFields';


export default class extends Component {
	render = () => 
    <div className="Shows">
        <img className="bgImage" src={showsBG} alt="showsBG"/>
    <div className="ShowsWrapper">
        <ShowsFields />
	</div>
        <div className="back">
            <Link to="/">BACK</Link>
        </div>
    </div>

}
