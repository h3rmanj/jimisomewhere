import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Video from './Video';
import './styles.css';

export default class extends Component {
	render = () =>
		<div>
			<Video />
			<div className="Main">
				<div className="LinkWrapper">

					<Link to="/music">MUSIC</Link>
					<a href="https://www.youtube.com/channel/UCLs1oPB2HV3WmZSmnmPlKMg/videos" target="_blank" rel="noopener noreferrer">VIDEOS</a>
					<a href="https://everpress.com/forever-store" target="_blank" rel="noopener noreferrer">STORE</a>
          <a href="https://www.ticketweb.uk/event/jimi-somewhere-the-camden-assembly-tickets/9882245" target="_blank" rel="noopener noreferrer">SHOWS</a>
					<Link to="/contact">CONTACT</Link>
				</div>
			</div>
		</div>
}
