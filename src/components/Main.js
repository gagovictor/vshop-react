import React, { Component } from 'react';
import Cart from './Cart/Cart';
import ShelfBasic from './Shelves/ShelfBasic';
import './VShop.css';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      total: 0,
      currency: 'BRL'
    };
  }

  render() {
    return (
        <div id="vshop-main-view">
          <ShelfBasic
          	addProductToCart = { this.addToCart }
          	removeProductFromCart = { this.removeFromCart } />
          <Cart cartData = { this.state } />
        </div>
    );
  }

  addToCart = (item) => {
    this.state.items.push(item);
    this.updateSum();
  }

  removeFromCart = (id) => {
    var index;
    this.state.items.some(function(item, i){
      if(item.props.data.id === id)
        index = i;
      return i;
    });
    if(typeof index != undefined)
    {
      this.state.items.splice(index, 1);
      this.updateSum();
    }
  }

  updateSum = () => {
    var price = 0;
    for(let i = 0; i < this.state.items.length; i ++)
      price += this.state.items[i].props.data.price;
    this.setState({ total : price });
  }

}

export default Main;