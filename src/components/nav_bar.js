import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchItems } from '../actions';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
      this.props.searchItems(event.target.value);
  }

  render() {
      return (
          <nav className="row teal darken-1">
              <div className="container">
                <div className="col s6 search-wrapper card focused teal lighten-4">
                  <input id="search" onChange={this.handleSearch} className="flow-text input-search" />
                </div>
              </div>
          </nav>
      );
  }
}

export default connect(null, { searchItems })(NavBar);
