import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Cart.css';

class Cart extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    var cartData = this.props.cartData;
    console.log(cartData);
    var itemList = cartData.items.map(function(item){
      console.log("here");
      return (
        <li className="vshop-cart-item" key={item.props.data.id} >
          <h4> {item.props.data.name} <span> {item.props.data.currency} {item.props.data.price}  </span></h4>
        </li>
      );
    });

    var list = (<ul id="vshop-cart-list"> {itemList} </ul>);

    var empty = <h4>Não há itens para exibir.</h4>;

    return (
      <div id="vshop-cart">
        <h1>Cart</h1>
        <div id="vshop-cart-list">
          { cartData.items.length > 0 ? list : empty }
          <h3>Total: {cartData.currency} {cartData.total}</h3>
        </div>
      </div>
    );
  }
}

Cart.propTypes = {
  cartData: PropTypes.object
}

export default Cart;