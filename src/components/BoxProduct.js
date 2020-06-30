import React from "react";
import styles from "../styles";
const BoxProduct = (props) => {
  return (
    <div style={styles.photmar} key={props.id}>
      <img
        src={props.product.image}
        alt={props.product.name}
      />
      <p>{props.product.name}</p>
      <p className="price"> {props.product.price} KD</p>
    </div>
  );
};

export default BoxProduct;
