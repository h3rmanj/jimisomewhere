import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Video from './Video';
import './styles.css';
import jimi from '../../../img/main_background.png'

export default class extends Component {
	render = () =>
		<div>
		
			<div className="Main">
			<img className="bgImage" src={jimi}/>
				<div className="LinkWrapper">
		
					<Link to="/music">Music</Link>
					<a href="https://www.youtube.com/channel/UCLs1oPB2HV3WmZSmnmPlKMg/videos" target="_blank" rel="noopener noreferrer">Videos</a>
					<a href="https://jimisomewhere.bigcartel.com/" target="_blank" rel="noopener noreferrer">Store</a>
          <a href="https://www.ticketweb.uk/event/jimi-somewhere-the-camden-assembly-tickets/9882245" target="_blank" rel="noopener noreferrer">Shows</a>
					<Link to="/contacts">Contact</Link>
				</div>
			</div>
			
				
		</div>
}
