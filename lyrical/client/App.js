import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import SongList from './components/SongList';
import SongDetail from './components/SongDetail';
import SongCreate from './components/SongCreate';

const App = () => (
  <div className="container">
    <Switch>
      <Route
        component={SongCreate}
        path="/songs/new"
      />

      <Route
        component={SongDetail}
        path="/songs/:id"
      />

      <Route
        component={SongList}
        exact
        path="/"
      />
    </Switch>
  </div>
);

export default App;
