import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryData from '../../data/Categories';
import './Filters.css';

class Filters extends Component {

  render() {
    var filters = this;
    var categories = CategoryData.map(function(category) {
      return (
          <li key = {category.id}>
            <input value = {category.key} type = "checkbox" filter-type = "category" name = "categories[]" onChange = {filters.toggleCategory}/>
            <label> {category.name} </label>
          </li>
      )
    });

    return (
      <div id="vshop-filters">
        <h1>Filters</h1>
        <div id="vshop-filters-list">
          <h3>Categories</h3>
          <ul>
            {categories}
          </ul>
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
}

Filters.propTypes = {
  filterCategory: PropTypes.func.isRequired
}

export default Filters;