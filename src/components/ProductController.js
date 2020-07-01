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

  handleClick = () => {
    this.setState(prevState => ({
      ProductVisibleOnPage: !prevState.ProductVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.ProductVisibleOnPage === true){
      currentlyVisibleState = <ProductList />
      buttonText = "View Cart"
    } else {
      currentlyVisibleState = <ShoppingCart />
      buttonText = "View Products"
    }
    return(
      <>
        <button onClick={this.handleClick}>{buttonText}</button>
        {currentlyVisibleState}
      </>
    );

  }
}

export default ProductControl;