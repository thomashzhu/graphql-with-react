import React from 'react';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import PropTypes from 'prop-types';

const client = new ApolloClient({
  dataIdFromObject: o => o.id,
});

const ApolloProviderRoot = ({ children }) => (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
);

ApolloProviderRoot.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

ApolloProviderRoot.defaultProps = {
  children: null,
};

export default ApolloProviderRoot;
