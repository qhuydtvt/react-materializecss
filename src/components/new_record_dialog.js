import React,  { Component } from 'react';

import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { hideDialog } from '../actions';

import 'flatpickr/dist/themes/light.css';
import Flatpickr from 'react-flatpickr';


class NewRecordDialog extends Component {
  constructor(props) {
    super(props);
    this.contentStyle= {
      width: '30%',
      maxWidth: 'none'
    };
  }

  renderActions() {
    return [
      (
        <button className="btn red waves-effect waves-light" onClick={this.props.hideDialog}>
          <i className="material-icons">check</i>
        </button>
      )
    ];
  }

  renderContent() {
    const item = this.props.newRecordDialog.item;

    return (
      <div className="row">
        <div className="col s12">
          <div className="input-field">
            <label htmlFor="className">Lớp</label>
            <input id="className" type="text" />
          </div>
          <p>
            <input name="role" type="radio" id="instructor" defaultChecked />
            <label htmlFor="instructor" >Giảng viên</label>
          </p>

          <p>
            <input name="role" type="radio" id="coach" />
            <label htmlFor="coach">Trợ giảng</label>
          </p>
          <Flatpickr />
        </div>
      </div>
    );
  }

  render() {
    const item = this.props.newRecordDialog.item;
    const title = item ? item.name : "";
    return (
      <div>
        <Dialog
          title={title}
          modal={false}
          open={this.props.newRecordDialog.open}
          onRequestClose={this.props.hideDialog}
          actions={this.renderActions()}
          contentStyle={this.contentStyle}
        >
          {this.renderContent()}
        </Dialog>
      </div>
    );
  }

}

function mapStateToProps({ newRecordDialog }) {
  return { newRecordDialog };
}

export default connect(mapStateToProps, { hideDialog })(NewRecordDialog);
