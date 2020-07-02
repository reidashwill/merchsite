import React from 'react';
import PropTypes from 'prop-types';


function ReusableForm(props){
  return(
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Product Name'/>
        <input
            type='text'
            name='type'
            placeholder='Product Type(ie "food", "bev")'/>
        <input
          type='number'
          name='price'
          placeholder='Sale price'/>
        <input
          type='number'
          name='quantity'
          placeholder='Amount of stock available'/>
        <button type='submit'>{props.buttonText}</button>
      </form>
    </>
  )
}


ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;