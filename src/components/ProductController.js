import React from 'react'
import ProductList from './ProductList'
import ShoppingCart from './ShoppingCart';

class ProductControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ProductVisibleOnPage: true
    };
  }

  render(){
    let currentlyVisibleState = null;
    if(this.state.ProductVisibleOnPage === true){
      currentlyVisibleState = <ProductList />
    } else {
      currentlyVisibleState = <ShoppingCart />
    }
    return(
      <>
        {currentlyVisibleState}
      </>
    );

  }
}

export default ProductControl;