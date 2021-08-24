import Landing from '@pages/Landing';
import Player from '@pages/Player';
import Zen from '@pages/Zen';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

interface AppProps {}

function App({}: AppProps) {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>
          <Route path="/player/:playlistId" exact>
            <Player />
          </Route>
          <Route path="/player" exact>
            <Player />
          </Route>
          <Route path="/zen" exact>
            <Zen />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
