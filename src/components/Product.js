import React from 'react';
import PropTypes from 'prop-types';

function Product(props){
  return (
    <>
      <h3>{props.name}</h3>
      <h4>{props.price}</h4>
      <h4>{props.quantity}</h4>
      <button type="submit">Buy Now</button>
      <hr />
    </>
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number,
  quantity: PropTypes.number
};

export default Product