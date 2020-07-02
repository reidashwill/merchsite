import React from 'react'
import PropTypes from 'prop-types';

function ProductDetail(props){
  const { product } = props;
  return(
    <>
      <h1>Product Details</h1>
      <h3>{product.name}</h3>
      <h3>{product.price}</h3>
      <h3>{product.quantity}</h3>
      <button onClick={ props.onClickingEdit }>Update Product</button>
      <button onClick={() => props.onClickingDelete(product.id)}>Delete Product</button>
    </>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.object,
  onClickingEdit: PropTypes.func
};

export default ProductDetail;