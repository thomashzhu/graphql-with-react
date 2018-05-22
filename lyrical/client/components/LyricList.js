import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LyricList extends Component {
  static propTypes = {
    lyrics: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  };

  renderLyrics = () => (
    this.props.lyrics.map(({ id, content }) => (
      <li
        className="collection-item"
        key={id}
      >
        {content}
      </li>
    ))
  )

  render() {
    return (
      <ul className="collection">
        {this.renderLyrics()}
      </ul>
    );
  }
}

export default LyricList;
