import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import promise from 'redux-promise';

import Home from './components/home';
import NavBar from './components/nav_bar';
import AddRecordDialog from './components/new_record_dialog';

import 'react-toastify/dist/ReactToastify.min.css';
import Toast from './components/toast';

import reducers from './reducers';
import './style/style.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <MuiThemeProvider>
      <div className="wrapper">
          <Toast />
          <AddRecordDialog />
          <NavBar />
          <Home />
      </div>
    </MuiThemeProvider>
  </Provider>
  , document.getElementById('root'));
