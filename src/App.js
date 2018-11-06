import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="vshop">
        <header className="vshop-header">
          <img src={logo} className="vshop-logo" alt="logo" />
        </header>
        <main className="vshop-main">
          <div className="vshop-products">
            <h1>Products</h1>
            <div className="vshop-products-list"></div>
          </div>
          <div className="vshop-cart">
            <h1>Cart</h1>
            <div className="vshop-cart-list">
            </div>
          </div>
          </main>
      </div>
    );
  }
}

export default App;
