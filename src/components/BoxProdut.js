import React from "react";
import styles from "../styles";
const BoxProdut = (props) => {
  return (
    <div style={styles.photmar} key={props.id}>
      <img
        src={props.produt.image}
        alt={props.produt.name}
        style={styles.prodimag}
      />
      <p style={styles.text}>{props.produt.name}</p>
      <p style={styles.text}> {props.produt.price} KD</p>
    </div>
  );
};

export default BoxProdut;
