import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {

  render() {
    return (
      <div>Hi there</div>
    );
  }
}

function mapStateToProps({login}) {
  return {};
}

export default connect(mapStateToProps)(Home);
