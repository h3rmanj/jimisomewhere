import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import jimi from '../../../img/main_background.png'

export default class extends Component {
	render = () =>
		<div>
		
			<div className="Main">
			<img className="bgImage" src={jimi} alt="background" />
				<div className="LinkWrapper">
		
					<a href="https://ffm.to/ngcs">Music</a>
					<a href="https://www.youtube.com/channel/UCLs1oPB2HV3WmZSmnmPlKMg/videos" target="_blank" rel="noopener noreferrer">Videos</a>
					<a href="https://thehyv.shop/collections/jimi-somewhere" target="_blank" rel="noopener noreferrer">Store</a>
					<Link to="/shows">Shows</Link>
					<Link to="/contact">Contact</Link>
				</div>
			</div>
			
				
		</div>
}
