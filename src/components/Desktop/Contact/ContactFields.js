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
		<h1 className="contactHeader">Contact</h1>
		<ContactField title="mgmt" at={["michael@furosound.no", "braedon@nextwaverecs.com"]} />
		<ContactField title="booking" at={["kess@allthingslive.com (NO)", "GUILLAUME@ATC-LIVE.COM (EU)", "JMOSS@PARADIGMAGENCY.COM (US)"]} />
		<ContactField title="press" at={["skayden@fancypr.com", "NANCY.LU@FANCYPR.COM"]} />
		<ContactField title="label" at="BRAEDON@NEXTWAVERECS.COM" />
		<br/>
		<div className="ContactField"> <a href="https://www.instagram.com/jimisomewhere/">@jimisomewhere</a></div>
		<div className="ContactField"><a href="http://www.onlinewebfonts.com">oNline Web Fonts</a></div>
	</div>
);

export default ContactFields;
