import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { showDialog } from '../actions';

class Home extends Component {

  constructor(props) {
    super(props);
    this.showItem = this.showItem.bind(this);
  }

  showItem(item) {
      this.props.showDialog(item);
  }

  renderItem(item, index) {
    const itemTitleStyle = item.name.split(" ").length > 3 ? "" : "";
    return (
      <div key={index} className="col s4">
        <div className="card item-card">
          <div className="card-image">
            <img className="responsive-img" src={item.image} alt={item.name} />
            <a onClick={(event) => this.showItem(item)} className="btn-floating btn-large halfway-fab waves-effect waves-light red" >
              <i className="material-icons item-action">fingerprint</i>
            </a>
          </div>

          <div className="card-content">
            <span className={`card-title ${itemTitleStyle}`} >{item.name}</span>
          </div>

          <div className="card-action">
            <a className="activator" href="#">
              <span className="activator">Lượt chấm: {item.records.length}</span>
            </a>
          </div>

          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">{item.name}<i className="material-icons right">close</i></span>
            {this.renderRecords(item.records)}
          </div>

        </div>
      </div>
    );
  }

  renderRecords(records) {
    return (
      <table className="responsive-table">
        <thead>
          <tr>
            <th>Lớp</th>
            <th>Vai trò</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => {
            return (
              <tr key={record.className}>
                <td>{record.className}</td>
                <td>{record.role}</td>
                <td>
                    <i data-tooltip="Click để xoá"  className="tooltipped material-icons red-text right">delete</i>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    );
  }

  render() {
    if (!this.props.items) {
      return <div>No data ...</div>;
    }

    return (
      <div className="container">
        <div className="row">
          {this.props.items.map((item, index) => this.renderItem(item, index))}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ items }) {
  return { items };
}

export default connect(mapStateToProps, {showDialog})(Home);
