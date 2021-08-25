import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";

import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './styles/custom.scss';
import './styles/index.css';
import './_fonts.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
