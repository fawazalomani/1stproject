import React from "react";

//styles

//items list
import products from "../items";
import BoxProduct from "./BoxProduct";
import { ListWrapper } from "../styles";

const ProductList = () => {
  const itemsList = products.map((product) => (
    <BoxProduct product={product} key={products.id} />
  ));
  return <ListWrapper>{itemsList}</ListWrapper>;
};

export default ProductList;
