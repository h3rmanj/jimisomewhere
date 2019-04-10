import React from 'react';
import './App.css';
import Mobile from './components/Mobile';
import Desktop from './components/Desktop';

const isMobile = {
	Android: () => navigator.userAgent.match(/Android/i),
	BlackBerry: () => navigator.userAgent.match(/BlackBerry/i),
	iOS: () => navigator.userAgent.match(/iPhone|iPad|iPod/i),
	Opera: () => navigator.userAgent.match(/Opera Mini/i),
	Windows: () => navigator.userAgent.match(/IEMobile/i),
	any: () => isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()
};

export default () => isMobile.any()
  ? <Mobile />
  : <Desktop />;
