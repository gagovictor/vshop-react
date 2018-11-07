import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './VShop.css';

class Header extends Component {
  render() {
    return (
      <header id="vshop-header">
        <img src={logo} id="vshop-logo" alt="logo" />
        <h1>vShop</h1>
      </header>
    );
  }
}

export default Header;
