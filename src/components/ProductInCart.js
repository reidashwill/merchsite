import React from 'react';
import PropTypes from 'prop-types';


function ProductInCart(props){
  return (
    <>
      <h3>{props.name}</h3>
      <h4>{props.price}</h4>
      <h4>{props.quantity}</h4>
      <button type="submit">Delete from cart</button>
      <hr />
    </>
  );
}

ProductInCart.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number,
  quantity: PropTypes.number
};

export default ProductInCart