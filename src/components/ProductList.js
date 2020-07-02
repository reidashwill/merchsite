import React from "react";
import Product from './Product';
import PropTypes from 'prop-types';

function ProductList(props) {
  return(
    <>
    <hr />
    {props.availableProducts.map((product) =>
      <Product
        whenProductClicked = { props.onProductSelection }
        name = {product.name}
        price = {product.price} 
        type = {product.type}
        quantity = {product.quantity}
        key = {product.id}
        id = {product.id}
      />
    )}
    </>
  );
}

ProductList.propTypes = {
  availableProducts: PropTypes.array,
  onProductSelection: PropTypes.func
}

export default ProductList;