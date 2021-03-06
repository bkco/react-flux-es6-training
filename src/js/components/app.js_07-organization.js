import React from 'react';
import AppActions from '../actions/app-actions'
import Catalog from './catalog/app-catalog'
import Cart from './cart/app-cart'

/*
 * Paths to directories (features in individual directories) updated.
 */
export default class App extends React.Component {
  render(){
    return (
      <div className="container">
        <Catalog />
        <Cart />
      </div>
    )
  }
}
