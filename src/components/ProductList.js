import React from "react";

//styles

import styles from "../styles";

//items list
import products from "../items";
import BoxProduct from "./BoxProduct";

const ProductList = () => {
  const itemsList = products.map((product) => (
    <BoxProduct product={product} key={products.id} />
  ));
  return <div style={styles.list}>{itemsList}</div>;
};

export default ProductList;
