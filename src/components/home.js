import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {

  renderItem(item) {
    return (
      <div key={item.name} className="col-md-4">
        <div>xxx</div>
      </div>
    );
  }

  render() {
    if (!this.props.items) {
      return <div>No data ...</div>;
    }

    return (
      <div className="container">
  <div className="row">

    <div className="col">
      One of three columns
    </div>

    <div className="col">
      One of three columns
    </div>

    <div className="col">
      One of three columns
    </div>

  </div>
</div>

    );
  }
}

function mapStateToProps({ items }) {
  return { items };
}

export default connect(mapStateToProps)(Home);
