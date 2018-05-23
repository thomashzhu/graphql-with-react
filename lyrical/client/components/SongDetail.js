import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

const SongDetail = ({ data: { loading, song } }) => {
  if (loading) return null;

  return (
    <div>
      <Link to="/">Back</Link>
      <h3>{song.title}</h3>
      <LyricList lyrics={song.lyrics} />
      <LyricCreate songId={song.id} />
    </div>
  );
};

SongDetail.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    song: PropTypes.shape({}),
  }),
};

SongDetail.defaultProps = {
  data: {
    song: null,
  },
};

export default graphql(gql`
  query SongQuery($id: ID!) {
    song(id: $id) {
      id
      title
      lyrics {
        id
        likes
        content
      }
    }
  }
`, {
  options: props => ({
    variables: {
      id: props.match.params.id,
    },
  }),
})(SongDetail);
