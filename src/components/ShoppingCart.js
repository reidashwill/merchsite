import React from 'react';
import Product from './Product';

const purchasedProducts = [
  {
    name: "Butter Rum",
    price: 5,
    type: "bev",
    quantity: 0
  },
  {
    name: "Mead",
    price: 3,
    type: "bev",
    quantity: 0
  },
  {
    name: "Ale",
    price: 2,
    type: "bev",
    quantity: 0
  },
  {
    name: "Wine",
    price: 4,
    type: "bev",
    quantity: 0
  },
  {
    name: "Fire Water",
    price: 8,
    type: "bev",
    quantity: 0
  },
  {
    name: "Mutton",
    price: 12,
    type: "food",
    quantity: 0
  },
  {
    name: "Biscuits",
    price: 3,
    type: "food",
    quantity: 0
  },
  {
    name: "Stew",
    price: 10,
    type: "food",
    quantity: 0
  },
]


function ShoppingCart() {
  return(
    <>
    <hr />
    {purchasedProducts.map((product, index) =>
      <Product
        name = {product.name}
        price = {product.price} 
        type = {product.type}
        quantity = {product.quantity}
        key = {index}
      />
    )}
    </>
  );
}

