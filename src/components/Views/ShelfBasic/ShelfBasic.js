import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductItem from './_Product.js';
import ProductData from '../../../data/Products.js';

class ShelfBasic extends Component {

  render() {
    var shelf = this;
    var filters = this.props.filters;

    /* Filters rendering of shelf
    /* products based on active filters.
    /************************************/
  	var products = ProductData.map(function(product) {
      var displayCategory;
      product.categories.some(function (v) {
        if(!displayCategory)
          displayCategory = filters.categories.indexOf(v) >= 0;
        return null;
      });
      if((!filters.categories.length || (filters.categories && displayCategory)) &&
         (!filters.priceRange.length || (product.price > filters.priceRange[0] && product.price < filters.priceRange[1])))
      {
    	 return (
          <li className="vshop-product-list-item" key={product.id}>
            <ProductItem
              data = { product }
              addToCart = { shelf.addToCart }
              removeFromCart = { shelf.removeFromCart } />
          </li>
        );
      }
      return null;
  	});

    return (
      <div id="vshop-view-shelf" className="basic">
        <h1>Products</h1>
        <ul id="vshop-products-list">
        	{products}
        </ul>
      </div>
    );
  }

  addToCart = (item) => {
    this.props.addProductToCart(item);
  }

  // Deprecated.
  removeFromCart = (item) => {
    this.props.removeProductFromCart(item.props.data.id);
  }
}

ShelfBasic.propTypes = {
  filters: PropTypes.object.isRequired,
  addProductToCart: PropTypes.func.isRequired,
  removeProductFromCart: PropTypes.func.isRequired
}

export default ShelfBasic;