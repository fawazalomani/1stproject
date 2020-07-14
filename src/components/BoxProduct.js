import React from "react";
import { observer } from "mobx-react";
import { ListWrapper } from "../styles";
import DeleteButton from "./DeleteButton";
import { Link } from "react-router-dom";
import UpdateButton from "./Buttons/UpdateButton";

const BoxProduct = ({ product }) => {
  return (
    <ListWrapper>
      <Link to={`/products/${product.slug}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <p>{product.name}</p>
      <p className="product-price"> {product.price} </p>
      <UpdateButton product={product} />
      <DeleteButton productId={product.id} />
    </ListWrapper>
  );
};

export default observer(BoxProduct);
