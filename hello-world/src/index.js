import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppHeader from './Header';
import LocationSidebar from './LocationSidebar';
import PRODUCTS from './Constants';
import './index.css';
import MainContainer from './MainContainer'
import CommonContainer from './CommonContainer'


ReactDOM.render(
  <AppHeader />,
  document.getElementById('header')
);

ReactDOM.render(
  <CommonContainer locations={PRODUCTS}/>,
  document.getElementById('container')
);
