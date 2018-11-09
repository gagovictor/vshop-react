import React, { Component } from 'react';
import Cart from './Partials/Cart/Cart';
import Filters from './Partials/Filters/Filters';
import ShelfBasic from './Views/ShelfBasic/ShelfBasic';
import Product from './Views/Product/Product';
import Checkout from './Views/Checkout/Checkout';
import Payment from './Views/Payment/Payment';
import './VShop.css';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      view: 'shelf',
      product_focus: null,
      items: [],
      total: 0,
      currency: 'R$',
      filters: {
        categories: [],
        priceRange: []
      },
    };
  }

  /**************************
   * View / state management
   ***************************/
  switchView = (viewSwitched) => {
    if(typeof viewSwitched != undefined)
      this.setState({ view : viewSwitched });
  }

  /*******************************
  /* Components Interaction Logic
  /********************************/

  /* Shelf Product - View Management
   **********************************/
  viewProduct = (id) => {
    this.setState({ product_focus : parseInt(id), view : 'product' });
  }

  /* Shelf - Cart Communication
   *****************************/
  addProductToCart = (item) => {
    this.state.items.push(item);
    this.updateSum();
    console.log(this.state.items);
  }
  removeProductFromCart = (id) => {
    var index;
    this.state.items.some(function(item, i) {
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
    price = price.toFixed(2);
    this.setState({ total : price });
  }

  /* Filters - Shelf Communication
   ********************************/
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

  /* Render Component
   *******************/
  render() {
    return (
        <div id="vshop-main-view">
          <div className="vshop-shelf-container">
            { this.state.view === 'shelf' &&
              <ShelfBasic
                filters = { this.state.filters }
                viewProduct = { this.viewProduct }
                addProductToCart = { this.addProductToCart }
                removeProductFromCart = { this.removeProductFromCart } />
            }
            { this.state.view === 'product' &&
              <Product
                productId = { this.state.product_focus }
                addProductToCart = { this.addProductToCart }
                switchView = { this.switchView } />
            }
            { this.state.view === 'checkout' &&
              <Checkout switchView = { this.switchView } />
            }
            { this.state.view === 'payment' &&
              <Payment switchView = { this.switchView } />
            }
          </div>
          <div className="vshop-sidebar">
            <Cart
              cartData = { this.state }
              removeProduct = { this.removeProductFromCart }
              switchView = { this.switchView } />
            { this.state.view === 'shelf' &&
              <Filters
                filterCategory = { this.filterCategory }
                setPriceRange = { this.setPriceRange } />
            }
          </div>
        </div>
    );
  }
}

export default Main;