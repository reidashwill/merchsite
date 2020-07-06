import productListReducer from '../../reducers/product-list-reducer';

describe('productListReducer', () => {

  const currentState = {
    1: {name: 'Ale',
    price: 5,
    quantity: 5,
    id: 1 },
    2: {name: 'Mead',
    price: '4',
    quantity: '4',
    id: 2 },
    
  }

  let action;
  const productData = {
    name: "Ale",
    price: 5,
    quantity: 5,
    id: 1
  }

  test('should seccussfully delete a product', () => {
    action = {
      type: 'DELETE_PRODUCT',
      id: 1
    };
    expect(productListReducer(currentState, action)).toEqual({
      2: {name: 'Mead',
      price: '4',
      quantity: '4',
      id: 2 },
    })
  })

  test('should successfully add new paoduct data to masterProductList', () => {
    const { name, price,  quantity, id} = productData;
    action = {
      type: 'ADD_PRODUCT',
      name: name,
      price: price,
      quantity: quantity,
      id: id
    }
    expect(productListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        price: price,
        quantity: quantity,
        id: id
      }
    })
  })

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(productListReducer({}, { type: null })).toEqual({});
  });
});