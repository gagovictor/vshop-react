import React from 'react';
import ReactDOM from 'react-dom';
import VShop from './components/VShop';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VShop />, div);
  ReactDOM.unmountComponentAtNode(div);
});
