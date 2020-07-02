import React, { useState } from "react";

//styles

//items list
import products from "../items";
import BoxProduct from "./BoxProduct";
import { ListWrapper } from "../styles";

const ProductList = () => {
  const [_products, setProducts] = useState(products);

  const deleteItem = (productsId) => {
    const updatedproducts = _products.filter(
      (product) => product.id !== productsId
    );
    setProducts(updatedproducts);
  };
  const itemsList = _products.map((product) => (
    <BoxProduct product={product} deleteItem={deleteItem} key={product.id} />
  ));
  return <ListWrapper>{itemsList}</ListWrapper>;
};

export default ProductList;
