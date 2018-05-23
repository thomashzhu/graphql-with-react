import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

class LyricList extends Component {
  static propTypes = {
    lyrics: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    mutate: PropTypes.func.isRequired,
  };

  onLike = (id, likes) => {
    this.props.mutate({
      variables: { id },
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          __typename: 'LyricType',
          id,
          likes: likes + 1,
        },
      },
    });
  }

  renderLyrics = () => (
    this.props.lyrics.map(({ id, likes, content }) => (
      <li
        className="collection-item"
        key={id}
      >
        {content}

        <div className="vote-box">
          <i
            className="material-icons"
            onClick={() => this.onLike(id, likes)}
            role="presentation"
          >
            thumb_up
          </i>

          {likes}
        </div>
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

export default graphql(gql`
  mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`)(LyricList);
