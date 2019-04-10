import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import jimi from '../../../img/jimi3.jpg'

const ContactField = ({title, at}) =>
	<div className="ContactField">
		<b>{title}</b> <br />
		{Array.isArray(at)
		? at.map(t => (
			<>
				{t} <br />
			</>
		))
		: at}
	</div>

export default () =>
	<div className="Contact">
		<div className="ContactWrapper">
			<img className="ContactJimi" src={jimi} alt="Jimi Somewhere"/>
			<div className="ContactFields" >
				<ContactField title="mgmt" at="michael@brusjan.no" />
				<ContactField title="booking" at={["MORTEN.GJERSUM@STAGEWAY.NO (NO)", "GUILLAUME@ATC-LIVE.COM (EU)", "JMOSS@PARADIGMAGENCY.COM (US)"]} />
				<ContactField title="press" at={["JON@CHALKPRESSAGENCY.CO.UK (EU)", "NANCY.LU@FANCYPR.COM (US)"]} />
				<ContactField title="label" at="jimisomewhere@gmail.com" />
				<ContactField title="all social media" at="@jimisomewhere" />
			</div>
			<div className="back">
				<Link to="/">BACK</Link>
			</div>
		</div>
	</div>;
