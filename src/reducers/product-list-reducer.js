export default (state = {}, action) => {
  const { name, price, type, quantity, id } = action;
  switch (action.type) {
    case 'ADD_PRODUCT':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          price: price,
          quantity: quantity,
          id: id
        }
      });
    case 'DELETE_PRODUCT':
      const newState = {...state};
      delete newState[id];
      return newState;

    default:
    return state  
  }
  
};