import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import Cart from '../Cart/Cart';
import './Product.css';

class ProductItem extends Component {

	constructor(props) {
		super(props);
		this.state = {
			added: false,
			amount: 1
		};
	}

	handleClick = () => {
		if(!this.state.added)
		{
      		this.setState({ added: true });
			this.props.addToCart(this);
		}
		else
		{
      		this.setState({ added: false });
			this.props.removeFromCart(this);
		}
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
						{!this.state.added ? "Comprar" : "Remover"}
					</button>
				</div></div>
		);
	}
}

ProductItem.propTypes = {
  data: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired
}

export default ProductItem;