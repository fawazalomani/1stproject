import React from "react";
import { DeleteButtonStyled } from "../styles";
import { useHistory } from "react-router-dom";

const DeleteButton = (props) => {
  const history = useHistory();

  const handleDelete = () => {
    props.deleteItem(props.productId);
    history.push("/products");
  };

  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;
