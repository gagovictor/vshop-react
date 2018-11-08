import React, { Component } from 'react';
import './VShop.css';

class Header extends Component {
  render() {
    return (
      <header id="vshop-header">
        <img src="images/logo.svg" id="vshop-logo" alt="logo" />
        <h1>vShop</h1>
      </header>
    );
  }
}

export default Header;
