import React, { Component } from 'react';
import Cart from './Cart/Cart';
import Filters from './Shelves/Filters';
import ShelfBasic from './Shelves/ShelfBasic';
import './VShop.css';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      total: 0,
      currency: 'R$',
      filters: {
        categories: [],
        priceRange: []
      },
    };
  }

  render() {
    return (
        <div id="vshop-main-view">
          <div className="vshop-shelf-container">
            <ShelfBasic
              filters = { this.state.filters }
              addProductToCart = { this.addToCart }
              removeProductFromCart = { this.removeFromCart } />
          </div>
          <div className="vshop-sidebar">
            <Cart cartData = { this.state } />
            <Filters
              filterCategory = { this.filterCategory }
              setPriceRange = { this.setPriceRange } />
          </div>
        </div>
    );
  }

  // Shelf - Cart Communication
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
  	price = Math.round((price + 0.00001) * 10) / 100;
    this.setState({ total : price });
  }

  // Filters - Shelf Communication
  filterCategory = (categories) => {
    var filters = this.state.filters;
    filters.categories = categories;
    this.setState({ filters : filters });
  }

  setPriceRange = (priceMin, priceMax) => {
    var filters = this.state.filters;
    filters.priceRange = [priceMin, priceMax];
    this.setState({ filters : filters });
  }

}

export default Main;