import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

class SongList extends Component {
  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      songs: PropTypes.arrayOf(PropTypes.shape({})),
    }).isRequired,
  };
  
  renderSongs = () => {
    const { data: { songs } } = this.props;

    return songs.map(song => (
      <li key={song.id}>
        {song.title}
      </li>
    ));
  }

  render() {
    if (this.props.data.loading) {
      return <div>Loading</div>;
    }

    return (
      <div>
        {this.renderSongs()}
      </div>
    );
  }
}

export default (() => {
  const songListQuery = gql`
    query {
      songs {
        id
        title
      }
    }
  `;

  return graphql(songListQuery)(SongList);
})();
