import React from "react";
import { ListWrapper, DeleteButtonStyled } from "../styles";
const BoxProduct = (props) => {
  const product = props.product;
  const handleDelete = () => {
    props.deleteItem(product.id);
  };
  return (
    <ListWrapper>
      <img src={product.image} alt={product.id} />
      <p>{product.name}</p>
      <p className="price"> {product.price}</p>
      <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
    </ListWrapper>
  );
};

export default BoxProduct;
