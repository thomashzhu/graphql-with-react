import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

class LyricCreate extends Component {
  static propTypes = {
    mutate: PropTypes.func,
    songId: PropTypes.string.isRequired,
  };
  
  static defaultProps = {
    mutate: () => {},
  };

  state = {
    content: '',
  };

  onSubmit = async (event) => {
    event.preventDefault();

    const { mutate, songId } = this.props;
    const { content } = this.state;

    await mutate({
      variables: {
        content,
        songId,
      },
    });

    this.setState({ content: '' });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="add-lyric">
          Add a Lyric

          <input
            id="add-lyric"
            onChange={event => this.setState({ content: event.target.value })}
            value={this.state.content}
          />
        </label>
      </form>
    );
  }
}

export default graphql(gql`
  mutation AddLyricToSong($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      title
      lyrics {
        content
      }
    }
  }
`)(LyricCreate);

