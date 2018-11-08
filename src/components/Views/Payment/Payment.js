import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Payment extends Component {

  render() {
    return (
      <div id="vshop-view-payment">
      	<h1>Payment</h1>
      	<button onClick={this.prev}>Go back</button>
      	<p>Thank you</p>
      	<button onClick={this.next}>Procceed to payment</button>
      </div>
    );
  }

  next = () => {
  	this.props.switchView('success');
  }

  prev = () => {
  	this.props.switchView('checkout');
  }

}

Payment.propTypes = {
  switchView: PropTypes.func
}

export default Payment;