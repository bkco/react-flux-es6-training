import React from 'react';
import Catalog from './catalog/app-catalog'
import Cart from './cart/app-cart'
import Template from './app-template';
import { Router, Route, IndexRoute } from 'react-router';

/*
 * Routing introduced to the application.
 * Routing enables us to define which component should render based on which path is currently active.
 * SEE:
 *   https://css-tricks.com/learning-react-router/
 *
 */
export default () => {
  return (
    <Router>
      <Route path="/" component={ Template }>
        <IndexRoute component={ Catalog } />
        <Route path="cart" component={ Cart } />
      </Route>
    </Router>
  );
}
