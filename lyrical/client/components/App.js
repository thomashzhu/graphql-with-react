import React from 'react';
import PropTypes from 'prop-types';

const App = ({ children }) => (
  <div className="container">
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

App.defaultProps = {
  children: [],
};

export default App;
