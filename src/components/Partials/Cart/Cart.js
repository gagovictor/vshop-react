import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Cart.css';

class Cart extends Component {

  render() {
    var cart = this;
    var cartData = this.props.cartData;
    var itemList = cartData.items.map(function(item) {
      var key = item.props.data.id + '_' + (new Date().getTime()) + '_' + Math.random(100);
      return (
        <li className="vshop-cart-item" key={key} >
          <button className="vshop-cart-remove" onClick={cart.removeProduct.bind(this)} data-product-id={item.props.data.id}>
            x
          </button>
          <h4> {item.props.data.name}
            <span> {item.props.data.currency} {item.props.data.price} </span>
          </h4>
        </li>
      );
    });

    var list  = (<ul id="vshop-cart-list"> {itemList} </ul>);
    var checkout = (
      <div className="vshop-cart-resume">
        <h3 className="vshop-cart-total"> Total: {cartData.currency} {cartData.total} </h3>
        <button className="vshop-cart-checkout" onClick = {this.checkOut}>Check out</button>
      </div>
    );
    var empty = <h4>Cart is empty.</h4>;

    return (
      <div id="vshop-cart">
        <h1>Cart</h1>
        <div id="vshop-cart-list">
          { cartData.items.length > 0 ? list : empty }
          { cartData.items.length > 0 && checkout }
        </div>
      </div>
    );
  }

  // Procceeds to checkout.
  checkOut = () => {
    this.props.switchView('checkout');
  }

  // Removes a procut from cart.
  removeProduct = (i) => {
    this.props.removeProduct(i.target.getAttribute('data-product-id'));
  }
}

Cart.propTypes = {
  cartData: PropTypes.object,
  removeProduct: PropTypes.func,
  switchView: PropTypes.func
}

export default Cart;