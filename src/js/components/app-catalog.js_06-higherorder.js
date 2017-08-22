import React from 'react';
import AppStore from '../stores/app-store';
import CatalogItem from './app-catalogitem';
import StoreWatchMixin from '../mixins/StoreWatchMixin';

function getCatalog(){
  return { items: AppStore.getCatalog() }
}

/*
 * HOC pattern used here also. Wrapping component and passing in callback which is responsible for managing the state.
 *
 * The conversion to HOC pattern converts it to a "stateless" pattern. Compare with app-catalog.js_05-component
 *
 * "this.state" becomes "props".
 */
const Catalog = (props) => {
  let items = props.items.map( item => {
    return <CatalogItem key={ item.id } item={ item } />
  });
  return (
    <div className="row">
      { items }
    </div>
  )
}
export default StoreWatchMixin(Catalog, getCatalog);
