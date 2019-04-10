import React from 'react';
import { Link } from 'react-router-dom';

const Main = () =>
  <div className="MobileMain">
    <a href="https://ffm.to/ponyboy" target="_blank" rel="noopener noreferrer">MUSIC</a>
    <a href="https://www.youtube.com/channel/UCLs1oPB2HV3WmZSmnmPlKMg/videos" target="_blank" rel="noopener noreferrer">VIDEOS</a>
    <a href="https://everpress.com/forever-store" target="_blank" rel="noopener noreferrer">STORE</a>
    <Link to="/contact">CONTACT</Link>
  </div>

export default Main;
