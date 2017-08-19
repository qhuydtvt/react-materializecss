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
          <nav className="row light-blue darken-4">
              <div className="container">
                <div className="col s6 search-wrapper card focused light-blue">
                  <input id="search" onChange={this.handleSearch} className="flow-text input-search light-blue" />
                </div>
              </div>
          </nav>
      );
  }
}

export default connect(null, { searchItems })(NavBar);
