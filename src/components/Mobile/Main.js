import React from 'react';
import { Link } from 'react-router-dom';

const Main = () =>
  <div className="MobileMain">
    <a href="https://ffm.to/ngcs" target="_blank" rel="noopener noreferrer">Music</a>
    <a href="https://www.youtube.com/channel/UCLs1oPB2HV3WmZSmnmPlKMg/videos" target="_blank" rel="noopener noreferrer">Videos</a>
    <a href="https://thehyv.shop/collections/jimi-somewhere" target="_blank" rel="noopener noreferrer">Store</a>
    <Link to="shows">Shows</Link>
    <Link to="/contact">Contact</Link>
  </div>

export default Main;
