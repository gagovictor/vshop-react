import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import Cart from '../Cart/Cart';
import './Product.css';
import ProductData from '../../../data/Products.js';

class Product extends Component {

	constructor(props) {
		super(props);
		var p = this;
  		var products = ProductData.map(function(product) {
  			if(product.id == p.props.productId)
  				p.data = product;
  		});
	}

	addToCart = () => {
		this.props.addProductToCart(this);
	}

	render() {
		var item = this.props.data;
		return (
			<div id="vshop-view-product">
				<h1>{this.data.name}</h1>
					<div className="vshop-product-container">
					<div className="vshop-hero">
						<img src={this.data.image} alt={this.data.name} />
					</div>
					<div className="vshop-description">
						<p>{this.data.description}</p>
					</div>
				</div>
				<button onClick={this.addToCart} > Add to cart</button>
			</div>
		);

	}
}

Product.propTypes = {
  productId: PropTypes.number.isRequired,
  addProductToCart: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired
}

export default Product;