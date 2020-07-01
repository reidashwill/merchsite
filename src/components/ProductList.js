import React from "react";
import Product from './Product'

const availableProducts = [
  {
    name: "Butter Rum",
    price: 5,
    type: "bev",
    quantity: 10
  },
  {
    name: "Mead",
    price: 3,
    type: "bev",
    quantity: 10
  },
  {
    name: "Ale",
    price: 2,
    type: "bev",
    quantity: 10
  },
  {
    name: "Wine",
    price: 4,
    type: "bev",
    quantity: 10
  },
  {
    name: "Fire Water",
    price: 8,
    type: "bev",
    quantity: 10
  },
  {
    name: "Mutton",
    price: 12,
    type: "food",
    quantity: 10
  },
  {
    name: "Biscuits",
    price: 3,
    type: "food",
    quantity: 225
  },
  {
    name: "Stew",
    price: 10,
    type: "food",
    quantity: 29
  },
]

function ProductList() {
  return(
    <>
    <hr />
    {availableProducts.map((product, index) =>
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

export default ProductList;