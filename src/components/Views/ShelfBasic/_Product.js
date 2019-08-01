import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './_Product.css';

class ShelfBasic_Product extends Component {

	handleClick = () => {
		this.props.addToCart(this.props.data);
	}

	render() {
		var item = this.props.data;
		return (<div>
				<div className="vshop-product-list-image">
					<a href="#" onClick={this.viewProduct.bind(this)} alt={"More info on "+item.name} data-product-id={item.id}></a>
					<img src={item.image} alt={item.name} />
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

	viewProduct = (e) => {
		this.props.viewProduct(e.target.getAttribute('data-product-id'));
	}
}

ShelfBasic_Product.propTypes = {
  data: PropTypes.object.isRequired,
  viewProduct: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired
}

export default ShelfBasic_Product;