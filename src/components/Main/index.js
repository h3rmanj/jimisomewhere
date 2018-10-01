import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default class extends Component {
	render = () =>
		<div>
			<div className="IframeTop">
				<div className="IframeWrapper">
					<iframe
						src="https://player.vimeo.com/video/285881104?title=0&byline=0&portrait=0&transparent=0&autoplay=1&loop=1"
						frameborder="0"
						title="Funny Cat Videos For Kids"
						webkitallowfullscreen=""
						mozallowfullscreen=""
						allowfullscreen=""
						data-ready="true" />
				</div>
			</div>
			<div className="Main">
				<div className="LinkWrapper">

					<a>MUSIC</a>
					<a>VIDEOS</a>
					<Link to="/dates">DATES</Link>
					<Link to="/contact">CONTACT</Link>
				</div>
			</div>
		</div>
}
