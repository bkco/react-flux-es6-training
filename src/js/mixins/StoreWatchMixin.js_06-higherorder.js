import React from 'react';
import AppStore from '../stores/app-store';

/*
 * ES6 classes do not support mixins. But is just called a mixin. It is a Higher Order Component/Function (HOC)!!
 *
 * Adding this HOC is a way of providing app-cart.js_05-component generic code across multiple components e.g
 *     constructor(){
          super();
          this.state = cartItems();
          this._onChange = this._onChange.bind(this);
       }
       componentWillMount(){
          AppStore.addChangeListener( this._onChange )
       }
       componentWillUnmount(){
          AppStore.removeChangeListener( this._onChange )
       }
       _onChange(){
          this.setState( cartItems )
       }
 * Use a spread operator "..." to pass in state and props.
 *
 * @param InnerComponent is component we pass in.
 * @param callback that we pass in.
 */
export default ( InnerComponent, stateCallback ) => class extends React.Component {
  constructor(props){
    super(props);
    this.state = stateCallback( props );
    this._onChange = this._onChange.bind(this);
  }
  componentWillMount(){
    AppStore.addChangeListener( this._onChange )
  }
  componentWillUnmount(){
    AppStore.removeChangeListener( this._onChange )
  }
  _onChange(){
    this.setState( stateCallback( this.props ) )
  }
  render(){
    return <InnerComponent {...this.state} {...this.props} />
  }
}
