import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import {
  hashHistory,
  Link,
} from 'react-router';
import PropTypes from 'prop-types';

import fetchSongsQuery from '../queries/fetchSongs';

class SongCreate extends Component {
  static propTypes = {
    mutate: PropTypes.func.isRequired,
  };

  state = {
    title: '',
  };

  onSubmit = async (event) => {
    event.preventDefault();

    try {
      await this.props.mutate({
        variables: {
          title: this.state.title,
        },
        refetchQueries: [{
          query: fetchSongsQuery,
        }],
      });

      hashHistory.push('/');
    } catch (error) {
      console.log('error', error);
    }
  }

  render() {
    return (
      <div>
        <Link
          href="/"
          to="/"
        >
          Back
        </Link>

        <h3>Create a New Song</h3>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="song_title">
            Song Title:
            <input
              id="song_title"
              onChange={event => this.setState({ title: event.target.value })}
              value={this.state.title}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default (() => {
  const mutation = gql`
    mutation AddSong($title: String) {
      addSong(title: $title) {
        title
      }
    }
  `;

  return graphql(mutation)(SongCreate);
})();
