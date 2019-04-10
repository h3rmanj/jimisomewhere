import React from 'react';

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

const ContactFields = () => (
	<div className="ContactFields" >
		<ContactField title="mgmt" at="michael@brusjan.no" />
		<ContactField title="booking" at={["MORTEN.GJERSUM@STAGEWAY.NO (NO)", "GUILLAUME@ATC-LIVE.COM (EU)", "JMOSS@PARADIGMAGENCY.COM (US)"]} />
		<ContactField title="press" at={["JON@CHALKPRESSAGENCY.CO.UK (EU)", "NANCY.LU@FANCYPR.COM (US)"]} />
		<ContactField title="label" at="jimisomewhere@gmail.com" />
		<ContactField title="all social media" at="@jimisomewhere" />
	</div>
);

export default ContactFields;
