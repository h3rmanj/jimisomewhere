import React, { useRef, useEffect, useState } from 'react';
import Player from '@vimeo/player';
import useReactRouter from 'use-react-router';

const Video = () => {
  const frame = useRef();
  const player = useRef();
  const [ready, setReady] = useState(false);

  const { location } = useReactRouter();

  useEffect(() => {
    player.current = new Player(frame.current);
    player.current.ready().then(() => {
      player.current.setVolume(0);
      setReady(true);
    })
  }, []);

  useEffect(() => {
    if (ready) {
      if (location.pathname === "/") {
        player.current.play();
      } else {
        player.current.pause();
      }
    }
  }, [location.pathname, ready])

  return (
    <div className="IframeTop">
      <div className="IframeWrapper">
        <iframe
          src="https://player.vimeo.com/video/285881104?title=0&byline=0&portrait=0&transparent=0&background=1&loop=1"
          frameBorder="0"
          ref={frame}
          title="jimi"
          webkitallowfullscreen=""
          mozallowfullscreen=""
          allowFullScreen=""
          data-ready="true"/>
      </div>
    </div>
  );
}

export default Video;
