import React from 'react'
import ProductList from './ProductList'
import ShoppingCart from './ShoppingCart';
import { v4 } from 'uuid'

class ProductControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ProductVisibleOnPage: true,
      availableProducts: [
        {
          name: "Butter Rum",
          price: 5,
          type: "bev",
          quantity: 10,
          id: v4()
        },
        {
          name: "Mead",
          price: 3,
          type: "bev",
          quantity: 10,
          id: v4()
        },
        {
          name: "Ale",
          price: 2,
          type: "bev",
          quantity: 10,
          id: v4()
        },
        {
          name: "Wine",
          price: 4,
          type: "bev",
          quantity: 10,
          id: v4()
        },
        {
          name: "Fire Water",
          price: 8,
          type: "bev",
          quantity: 10,
          id: v4()
        },
        {
          name: "Mutton",
          price: 12,
          type: "food",
          quantity: 10,
          id: v4()
        },
        {
          name: "Biscuits",
          price: 3,
          type: "food",
          quantity: 225,
          id: v4()
        },
        {
          name: "Stew",
          price: 10,
          type: "food",
          quantity: 29,
          id: v4()
        },
      ]
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