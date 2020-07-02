import React from 'react'
import { v4 } from 'uuid';
import PropTypes from'prop-types';
import ReusableForm from "./ReusableForm";

function NewProductForm(props) {
  return (
    <>
      <ReusableForm
      formSubmissionHandler={handleNewProductFormSubmission}
      buttonText={"Create Product"} />
    </>
  );
  
  function handleNewProductFormSubmission(event) {
    event.preventDefault();
    props.onNewProductCreation({
      name: event.target.name.value, 
      type: event.target.type.value, 
      price: event.target.price.value, 
      quantity: event.target.quantity.value,
      id: v4()})
  }
}

NewProductForm.propTypes={
  onNewProductCreation: PropTypes.func
}
export default NewProductForm