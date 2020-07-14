import React from "react";
import { DeleteButtonStyled } from "../styles";
import productStore from "../stores/productStore";

const DeleteButton = ({ productId }) => {
  const handleDelete = () => productStore.deleteItem(productId);

  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;
