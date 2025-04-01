import React from 'react';
import ReactDOM from 'react-dom/client';
// import User from './React001.Components';
import MyComp from './React002.StateManagement';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <User /> */}
    <MyComp />
  </React.StrictMode>
);
