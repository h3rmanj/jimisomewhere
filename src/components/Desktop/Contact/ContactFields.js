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
		<ContactField title="mgmt" at={["michael@furosound.no", "braedon@nextwaverecs.com"]} />
		<ContactField title="booking" at={["kess@allthingslive.com (NO)", "GUILLAUME@ATC-LIVE.COM (EU)", "JMOSS@PARADIGMAGENCY.COM (US)"]} />
		<ContactField title="press" at={["skayden@fancypr.com", "NANCY.LU@FANCYPR.COM"]} />
		<ContactField title="label" at="BRAEDON@NEXTWAVERECS.COM" />
		<ContactField title="all social media" at="@jimisomewhere" />
	</div>
);

export default ContactFields;
