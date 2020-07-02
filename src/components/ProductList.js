import React from "react";
import ProductForSale from './ProductForSale';
import PropTypes from 'prop-types';

function ProductList(props) {
  return(
    <>
    <hr />
    {props.availableProducts.map((product, index) =>
      <ProductForSale
        name = {product.name}
        price = {product.price} 
        type = {product.type}
        quantity = {product.quantity}
        key = {index}
        id = {product.id}
      />
    )}
    </>
  );
}

ProductList.propTypes = {
  availableProducts: PropTypes.array
}

export default ProductList;