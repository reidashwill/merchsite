import React from 'react'
import ProductList from './ProductList'
import NewProductForm from './NewProductForm'
import ProductDetail from './ProductDetail'
import EditProductForm from './EditProductForm'
import { connect } from 'react-redux';

class ProductControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
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
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_PRODUCT',
      id: id
    }
    dispatch(action);
    this.setState({selectedProduct: null});
  }
  
  handleEditingProductInList = (productToEdit) => {
    const { dispatch } = this.props;
    const { id, name, price, quantity } = productToEdit;
    const action = {
      type: 'ADD_PRODUCT',
      id: id,
      name: name,
      price: price, 
      quantity: quantity
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedProduct: null
    });
  }
  
  handleChangingSelectedProduct = (id) => {
    const selectedProduct = this.props.masterProductsList[id];
    this.setState({selectedProduct: selectedProduct});
  }

  handleAddingNewProduct = (newProduct) => {
    const { dispatch } = this.props;
    const { id, name, price, quantity } = newProduct;
    const action = {
      type: "ADD_PRODUCT",
      id: id,
      name: name,
      price: price,
      quantity: quantity
    }
    dispatch(action);
    this.setState({formVisibleOnPage: false});
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
      currentlyVisibleState = <ProductList productList = {this.props.masterProductsList} onProductSelection={this.handleChangingSelectedProduct}/>;
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

const mapStateToProps = state => {
  return{
    masterProductsList: state
  }
}
ProductControl = connect(mapStateToProps)(ProductControl)

export default ProductControl;