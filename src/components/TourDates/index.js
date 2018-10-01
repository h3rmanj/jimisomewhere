import React from 'react';
import { Link } from 'react-router-dom';
import jimi from '../../img/jimi4.png';
import './styles.css';

const dates = [
	{
		link: "",
		location: "manchester",
		date: "11.10.18"
	},
	{
		link: "",
		location: "bergen",
		date: "14.10.18"
	},
	{
		link: "",
		location: "tootenhaim",
		date: "25.10.18"
	},
	{
		link: "",
		location: "scotland",
		date: "27.10.18"
	},
	{
		link: "",
		location: "wales",
		date: "04.11.18"
	},
	{
		link: "",
		location: "big ben",
		date: "09.11.18"
	},
]

const TourDate = ({link, location, date}) =>
	<div className="TourDate">
		<a href={link}>
			<div className="TourDateLocation">{location}</div>
			<div className="TourDateDate">{date}</div>
		</a>
	</div>

export default () =>
	<div className="DatesWrapper">
		<div className="BG" />
		<div className="DatesContainer">
			<img className="JimiDates" alt="Jimi Somewhere" src={jimi} />
			<div className="TourDatesWrapper">
				<div className="TourDates">
					<Link to="/"><i className="fas fa-arrow-left"/></Link> <br/>
					{dates.map(o => <TourDate {...o} />)}
				</div>
			</div>
		</div>
	</div>
