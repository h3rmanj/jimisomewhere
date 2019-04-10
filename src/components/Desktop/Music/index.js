import React, { lazy, Suspense, useMemo } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import useReactRouter from 'use-react-router';
import { BarLoader } from 'react-spinners'
import './styles.css';
const Booklet = lazy(() => import('./Booklet'));

const MusicHome = () => (
  <>
    <div className="Logo">
    </div>
    <div className="MusicLinks">
      <a href="https://ffm.to/ponyboy" target="_blank" rel="noopener noreferrer">LISTEN</a>
      <Link to="/music/booklet">BOOKLET</Link>
    </div>
    <div className="mBack">
      <Link to="/">BACK</Link>
    </div>
  </>
);

const Music = () => {
  const { location } = useReactRouter();
  const style = useMemo(() => (
    location.pathname === "/music/booklet"
    ? { overflowY: 'auto' }
    : null
  ), [location.pathname]);

  return (
    <div className="Music" style={style}>
      <Suspense fallback={<div><BarLoader color='#89A000' width={200} height={8} css={{width: '100%', margin: '30% auto'}}/></div>}>
        <Switch>
          <Route path="/music/booklet" component={Booklet} />
          <Route path="/music" component={MusicHome} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default Music;
