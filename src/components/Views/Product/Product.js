import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import Cart from '../Cart/Cart';
import './Product.css';

class ShelfBasic_Product extends Component {

	handleClick = () => {
		this.props.addToCart(this);
	}

	render() {
		var item = this.props.data;
		return (<div>
				<div className="vshop-product-list-image">
					<img src={item.image} alt={item.name}/>
				</div>
				<div className="vshop-product-list-name">
					<h3>{item.name}</h3>
				</div>
				<div className="vshop-product-list-row">
					<h4 className="vshop-product-list-price">{item.currency} {item.price}</h4>
					<button className="vshop-product-list-btn"
						onClick={this.handleClick}>
						Add to cart
					</button>
				</div></div>
		);
	}
}

ShelfBasic_Product.propTypes = {
  data: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired
}

export default ShelfBasic_Product;