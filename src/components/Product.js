import React from 'react';
import PropTypes from 'prop-types';

function Product(props){
  return (
    <>
      <div onClick = {() => props.whenProductClicked(props.id)}>
        <h3>{props.name}</h3>
        <h4>{props.price}</h4>
        <h4>{props.quantity}</h4>
        <hr />
      </div>
    </>
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenProductClicked: PropTypes.func
};

export default Product