import React, { lazy, Suspense } from 'react';
import './App.css';
const Mobile = lazy(() = import('./components/Mobile'));
const Desktop = lazy(() = import('./components/Desktop'));

const isMobile = {
	Android: () => navigator.userAgent.match(/Android/i),
	BlackBerry: () => navigator.userAgent.match(/BlackBerry/i),
	iOS: () => navigator.userAgent.match(/iPhone|iPad|iPod/i),
	Opera: () => navigator.userAgent.match(/Opera Mini/i),
	Windows: () => navigator.userAgent.match(/IEMobile/i),
	any: () => isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()
};

export default () => (
	<Suspense fallback={<div></div>}>
		{isMobile.any()
	  	? <Mobile />
	  	: <Desktop />
		}
	</Suspense>
);
