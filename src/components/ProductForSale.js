import React from 'react';
import PropTypes from 'prop-types';

function ProductForSale(props){
  return (
    <>
      <h3>{props.name}</h3>
      <h4>{props.price}</h4>
      <h4>{props.quantity}</h4>
      {/* <button onClick={this.handleClick}>Buy Now</button> */}
      <hr />
    </>
  );
}

ProductForSale.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number,
  quantity: PropTypes.number
};

export default ProductForSale