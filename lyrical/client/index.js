import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import {
  hashHistory,
  IndexRoute,
  Route,
  Router,
} from 'react-router';

import App from './components/App';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';

const client = new ApolloClient();

const Root = () => (
  <ApolloProvider client={client}>
    <Router history={hashHistory}>
      <Route
        component={App}
        path="/"
      >
        <IndexRoute component={SongList} />

        <Route
          component={SongCreate}
          path="songs/new"
        />
      </Route>
    </Router>
  </ApolloProvider>
);

ReactDOM.render(
  <Root />,
  document.querySelector('#root'),
);
