import React, { Component } from 'react';

class NavBar extends Component {
  render() {
      return (
          <nav className="blue">
              <div className="nav-wrapper row">
                <i className="search-icon col s1 material-icons white-text">search</i>
                <div className="col s11">
                  <input type="search" className="nav-search-input light-blue" />
                </div>
              </div>
          </nav>
      );
  }
}

export default NavBar;
