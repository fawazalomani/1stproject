import React from "react";
import styles from "../styles";
const BoxProduct = (props) => {
  return (
    <div style={styles.photmar} key={props.id}>
      <img
        src={props.product.image}
        alt={props.product.name}
        style={styles.prodImage}
      />
      <p style={styles.text}>{props.product.name}</p>
      <p style={styles.text}> {props.product.price} KD</p>
    </div>
  );
};

export default BoxProduct;
