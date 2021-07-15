import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions/posts';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }
  render() {
    console.log('PROPS: ', this.props);
    const posts = this.props.posts;
    return (
      <div>
        {posts.map((data, index) => (
          <p>{data.content}</p>
        ))}
        <h1>Welcome to club innovative</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

export default connect(mapStateToProps)(App);
