import React from 'react'
import ProductList from './ProductList'
import NewProductForm from './NewProductForm'
import ProductDetail from './ProductDetail'

class ProductControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      availableProducts: [],
      selectedProduct: null
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }
  
  handleChangingSelectedProduct = (id) => {
    const selectedProduct = this.state.availableProducts.filter(product => product.id === id)[0];
    this.setState({selectedProduct: selectedProduct});
  }

  handleAddingNewProduct = (newProduct) => {
    const newAvailableProducts = this.state.availableProducts.concat(newProduct);
    this.setState({availableProducts: newAvailableProducts,
                    formVisibleOnPage: false });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.selectedProduct !=null){
      currentlyVisibleState = <ProductDetail product = {this.state.selectedProduct}/>
      buttonText="Return to Products"
    } else if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewProductForm onNewProductCreation={this.handleAddingNewProduct}/>;
      buttonText = "Return to Products";
    } else {
      currentlyVisibleState = <ProductList availableProducts = {this.state.availableProducts} onProductSelection={this.handleChangingSelectedProduct}/>;
      buttonText = "Add item";
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