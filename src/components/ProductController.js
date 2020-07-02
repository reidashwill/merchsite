import React from 'react'
import ProductList from './ProductList'
import NewProductForm from './NewProductForm'
import { v4 } from 'uuid'

class ProductControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      availableProducts: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewProduct = (newProduct) => {
    const newAvailableProducts = this.state.availableProducts.concat(newProduct);
    this.setState({availableProducts: newAvailableProducts,
                    formVisibleOnPage: false });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.formVisibleOnPage){
      currentlyVisibleState = <NewProductForm onNewProductCreation={this.handleAddingNewProduct}/>
      buttonText = "Return to Products"
    } else {
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