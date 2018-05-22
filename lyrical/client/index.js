import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HashRouter } from 'react-router-dom';

import App from './App';
import './style/style.css';

const client = new ApolloClient({
  dataIdFromObject: object => object.id,
});

const Root = () => (
  <ApolloProvider client={client}>
    <HashRouter>
      <App />
    </HashRouter>
  </ApolloProvider>
);

ReactDOM.render(
  <Root />,
  document.querySelector('#root'),
);
