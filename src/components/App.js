import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions/posts';
import Home from './Home';
import Navbar from './Navbar';
import Login from './Login';
import Blog from './Blog';
import Footer from './Footer';
import Header from './Header';
import Contact from './Contact';

import '../assets/css/bootstrap.min.css';
import '../assets/css/home.css';
import '../assets/css/main.css';
import '../assets/css/responsive.css';
import '../assets/fonts/line-icons.css'
import '../assets/plugins/morris/morris.css';
import '../assets/assets/css/animate.css';
import '../assets/assets/css/bootstrap.min.css';
import '../assets/assets/css/default.css';
import '../assets/assets/css/style.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }
  render() {
    console.log('PROPS: ', this.props);
    const posts = this.props.posts;
    return (
      <div class="app header-default side-nav-dark">
        <div class="layout">
          <Header />
          <Navbar />
          <div class="page-container">
            <Home />
            {/* <Login />
            <Blog />
            <Contact />
            <Footer /> */}
          </div>
        </div>
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
