import React from 'react'
import ProductList from './ProductList'
import NewProductForm from './NewProductForm'
import ProductDetail from './ProductDetail'
import EditProductForm from './EditProductForm'

class ProductControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      availableProducts: [],
      selectedProduct: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedProduct != null) {
      this.setState({
        editing: false,
        formVisibleOnPage: false,
        selectedProduct: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleDeletingProduct = (id) => {
    const newProductList = this.state.availableProducts.filter(product => product.id !== id);
    this.setState({
      availableProducts: newProductList,
      selectedProduct: null
    });
  }
  
  handleEditingProductInList = (productToEdit) => {
    const editedProductList = this.state.availableProducts.filter(product => product.id !== this.state.selectedProduct.id).concat(productToEdit);
    this.setState({
      availableProducts: editedProductList,
      editing: false,
      selectedProduct: null
    });
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
    if (this.state.editing) {
      currentlyVisibleState = <EditProductForm product = {this.state.selectedProduct} onClickingEdit = {this.handleEditingProductInList} onEditProduct = {this.handleEditingProductInList}/>
      buttonText="Return to Product"
    } else if(this.state.selectedProduct !=null){
      currentlyVisibleState = <ProductDetail product = {this.state.selectedProduct} onClickingEdit = {this.handleEditClick} onClickingDelete = {this.handleDeletingProduct}/>
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