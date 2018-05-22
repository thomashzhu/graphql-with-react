import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import ApolloProviderRoot from './components/ApolloProviderRoot';
import App from './App';
import './style/style.css';

const Root = () => (
  <ApolloProviderRoot>
    <HashRouter>
      <App />
    </HashRouter>
  </ApolloProviderRoot>
);

ReactDOM.render(
  <Root />,
  document.querySelector('#root'),
);
