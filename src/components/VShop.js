import React, { Component } from 'react';
import './VShop.css';
import Main from './Main';
import Header from './Partials/Header';
import Footer from './Partials/Footer';

class VShop extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cache : null
    };

    // Retrieve localStorage data
    // TODO: further API integration / https://www.robinwieruch.de/local-storage-react/
    /*const cachedHits = localStorage.getItem(value);
    if (cachedHits) {
      this.setState({ hits: JSON.parse(cachedHits) });
      return;
    }*/
  }


  render() {
    return (
      <div id="vshop">
        <div id="vshop-header">
          <Header />
        </div>
        <main id="vshop-main">
          <Main />
        </main>
        <div id="vshop-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default VShop;