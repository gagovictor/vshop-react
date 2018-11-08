import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductData from '../../../data/Products';
import CategoryData from '../../../data/Categories';
import './Filters.css';

class Filters extends Component {

  render() {
    var filters = this;

    // Category Filters
    var categories = CategoryData.map(function(category) {
      return (
          <li key = {category.id}>
            <input value = {category.key} type = "checkbox" filter-type = "category" name = "categories[]" onChange = {filters.toggleCategory}/>
            <label> {category.name} </label>
          </li>
      )
    });

    // Price Range Filter
    var priceMin = 1e10, priceMax = 0;
    ProductData.map(function(product) {
      if(product.price < priceMin)
        priceMin = Math.round(product.price);
      if(product.price > priceMax)
        priceMax = Math.round(product.price);
      return null;
    });
    var priceRange = <input type="range"
      min={priceMin} max={priceMax} defaultValue={/*Math.round(((priceMax - priceMin) / 2))*/0} step="1"
      filter-type="price-range" name="priceChange" onChange = {filters.updatePriceRange} />;

    return (
      <div id="vshop-filters">
        <h1>Filters</h1>
        <div id="vshop-filters-list">
          <h3>Categories</h3>
          <ul>
            {categories}
          </ul>
          <h3>Price Range</h3>
          {priceRange}
        </div>
      </div>
    );
  }

  toggleCategory = () => {
    var filter = document.querySelectorAll('[filter-type="category"]');
    var filteredCategories = [];
    for(let i = 0; i < filter.length; i ++)
    {
      if(filter[i].checked)
        filteredCategories.push(filter[i].value);
    }
    this.props.filterCategory(filteredCategories);
  }

  updatePriceRange = () => {
    var priceMin = 0; // TODO: Allow min value
    var priceMax = document.querySelectorAll('[filter-type="price-range"]')[0].value;
    this.props.setPriceRange(priceMin, priceMax);
  }
}

Filters.propTypes = {
  filterCategory: PropTypes.func.isRequired,
  setPriceRange: PropTypes.func.isRequired
}

export default Filters;