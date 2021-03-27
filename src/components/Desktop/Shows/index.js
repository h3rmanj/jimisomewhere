import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import showsBG from '../../../img/shows_page.png'


export default class extends Component {
	render = () =>
    <div className="Shows">
        <img className="bgImage" src={showsBG} alt="showsBG"/>
    <div className="ShowsWrapper">
    <div className="ShowsFields" >
        <h1 className="ShowsHeader">Shows</h1>
    <div className="ShowsField"><a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.ticketmaster.dk%2Fevent%2Fjimi-somewhere-live-in-copenhagen-2021-billetter%2F496045%3F_ga%3D2.135745848.807693378.1616876856-1801563635.1616876856%26fbclid%3DIwAR0MmlhyrfBdJqEVc-fOTCAmhgFauu8YsXBqHPJPyI4eacrP53EuzP4uKXM&h=AT2W6klO82Nzrugtx-36uhzZ81C6fPd3MhZoRLs_IttbS88aGGz1IG1YAhSyJhF8rMdCqANQ1pZJ8TVASt_VKIMIFFyM0PbfLNHZfjoM6yXyHhJWwcZa_TMQjiEycH-Nr5w">09.19.20 - Hotel Cecil - København, Denmark</a></div>
	</div>
        <div className="back">
            <Link to="/">BACK</Link>
        </div>
    </div>
</div>;
}
