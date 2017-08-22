import React from 'react';
import AppStore from '../../stores/app-store';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';
import AppActions from '../../actions/app-actions'
import CartButton from '../cart/app-cart-button';
import { Link } from 'react-router';

/*
 * callback function.
 *
 * The "props.params" is how you get values passed in from React router.
 *
 * The "Link" uses an interpolated string.
 */
function getCatalogItem( props ){
  let item = AppStore.getCatalog().find( ({ id }) => id === props.params.item )
  return {item}
}

/*
 * CatalogDetail component showing detailed page view.
 */
const CatalogDetail = (props) => {
  return (
      <div>
          <h4>{ props.item.title }</h4>
          <img src="http://placehold.it/250x250" />
          <p>{ props.item.description }</p>
          <p>${ props.item.cost } <span
            className="text-success">
              { props.item.qty && `(${props.item.qty} in cart)`}
            </span>
          </p>
          <div className="btn-group">
            <Link to={ `/item/${props.item.id}` } className="btn btn-default btn-sm">Continue Shopping</Link>
            <CartButton
              handler={
                AppActions.addItem.bind(null, props.item)
              }
              txt="Add To Cart"
              />
          </div>

      </div>
  )
}

export default StoreWatchMixin( CatalogDetail, getCatalogItem )
