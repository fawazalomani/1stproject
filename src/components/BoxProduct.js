import React from "react";
import { ListWrapper } from "../styles";
import DeleteButton from "./DeleteButton";
import { Link } from "react-router-dom";

const BoxProduct = ({ product, deleteItem }) => {
  return (
    <ListWrapper>
      <Link to={`/products/${product.slug}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <p>{product.name}</p>
      <p className="product-price"> {product.price}</p>
      <DeleteButton productId={product.id} deleteItem={deleteItem} />
    </ListWrapper>
  );
};

export default BoxProduct;
