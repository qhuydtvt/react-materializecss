import React, { Component } from 'react';

class NavBar extends Component {
  render() {
      return (
          <nav className="row light-blue darken-4">
              <div className="container">
                <div className="col s6 search-wrapper card focused light-blue">
                  <input id="search" className="flow-text input-search light-blue" />
                </div>
              </div>
          </nav>
      );
  }
}

export default NavBar;
