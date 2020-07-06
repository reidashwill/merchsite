import React from "react";
import Product from './Product';
import PropTypes from 'prop-types';

function ProductList(props) {
  return(
    <React.Fragment>
    
    {Object.values(props.productList).map((product) => {
        return <Product
          whenProductClicked={props.onProductSelection}
          name={product.name}
          price={product.price}
          quantity={product.quantity}
          id={product.id}
          key={product.id} />
      })}
    </React.Fragment>
  );
}

ProductList.propTypes = {
  productList: PropTypes.object,
  onProductSelection: PropTypes.func
}

export default ProductList;