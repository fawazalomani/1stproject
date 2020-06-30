import React from "react";

//styles

import styles from "../styles";

//items list
import produts from "../items";
import BoxProdut from "./BoxProdut";

const ProdutList = () => {
  const itemsList = produts.map((produt) => (
    <BoxProdut produt={produt} key={produts.id} />
  ));
  return <div style={styles.list}>{itemsList}</div>;
};

export default ProdutList;
