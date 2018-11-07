import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import VShop from './components/VShop';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<VShop />, document.getElementById('root'));
ReactDOM.render(<Header />, document.getElementById('vshop-header'));
ReactDOM.render(<Footer />, document.getElementById('vshop-footer'));
ReactDOM.render(<Main />, document.getElementById('vshop-main'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
