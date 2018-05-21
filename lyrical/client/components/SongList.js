import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router';
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
      <li
        className="collection-item"
        key={song.id}
      >
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
        <ul className="collection">
          {this.renderSongs()}
        </ul>

        <Link
          className="btn-floating btn-large red right"
          href="/songs/new"
          to="/songs/new"
        >
          <i className="material-icons">add</i>
        </Link>
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
