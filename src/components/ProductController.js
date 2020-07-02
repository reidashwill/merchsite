import React from 'react'
import ProductList from './ProductList'
import { v4 } from 'uuid'

class ProductControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ProductVisibleOnPage: true,
      availableProducts: []
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
      currentlyVisibleState = <ProductList availableProducts = {this.state.availableProducts}/>
      buttonText = "Add item"
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