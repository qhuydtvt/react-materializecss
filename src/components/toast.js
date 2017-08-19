import React from 'react';
import { ToastContainer } from 'react-toastify';

export default function(props) {
    return (
      <ToastContainer
          position="top-right"
          type="default"
          autoClose={2000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
        />
    );
  }
