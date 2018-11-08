import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckOut extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      total: 0,
      currency: 'R$'
    };
  }

  render() {
    return (
      <div id="vshop-view-checkout">
      	<h1>Checkout</h1>
      	<button onClick={this.prev}>Go back</button>
      	<p>Please review your order before procceeding to payment.</p>
      	<button onClick={this.next}>Procceed to payment</button>
      </div>
    );
  }

  prev = () => {
  	this.props.switchView('shelf');
  }

  next = () => {
  	this.props.switchView('payment');
  }

}

CheckOut.propTypes = {
  cartData: PropTypes.object,
  switchView: PropTypes.func
}

export default CheckOut;