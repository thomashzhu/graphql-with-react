import React, { Component } from 'react';
import {
  compose,
  graphql,
} from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import fetchSongsQuery from '../queries/fetchSongs';

class SongList extends Component {
  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      refetch: PropTypes.func.isRequired,
      songs: PropTypes.arrayOf(PropTypes.shape({})),
    }).isRequired,
    mutate: PropTypes.func.isRequired,
  };
  
  onSongDelete = id => (
    async () => {
      const {
        mutate,
        data: { refetch },
      } = this.props;

      await mutate({
        variables: { id },
      });

      refetch();
    }
  )

  renderSongs = () => {
    const { data: { songs } } = this.props;

    return songs.map(({ id, title }) => (
      <li
        className="collection-item"
        key={id}
      >
        <Link to={`/songs/${id}`}>
          {title}
        </Link>

        <i
          className="material-icons"
          onClick={this.onSongDelete(id)}
          role="presentation"
        >
          delete
        </i>
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
          to="/songs/new"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

export default (() => {
  const mutation = gql`
    mutation DeleteSong($id: ID) {
      deleteSong(id: $id) {
        id
      }
    }
  `;

  return compose(
    graphql(fetchSongsQuery),
    graphql(mutation),
  )(SongList);
})();
