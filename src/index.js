import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UIkit from "uikit";
import Icons from 'uikit/dist/js/uikit-icons';
import "../node_modules/uikit/dist/js/uikit.min.js";
import '../node_modules/uikit/dist/css/uikit.min.css';



UIkit.use(Icons)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);