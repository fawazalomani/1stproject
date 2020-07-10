import React from "react";
import { ListWrapper } from "../styles";
import DeleteButton from "./DeleteButton";
import { Link } from "react-router-dom";
import products from "../items";
const BoxProduct = (props) => {
  const product = props.product;
  const handleDelete = () => {
    props.deleteItem(product.id);
  };
  return (
    <ListWrapper>
      <Link to={`/products/${product.name}`}>
        <img
          src={product.image}
          alt={product.id}
          onClick={() => props.selectVisible(product.id)}
        />
      </Link>
      <p>{product.name}</p>
      <p className="price"> {product.price}</p>
      <DeleteButton deleteItem={handleDelete} productId={product.id} />
    </ListWrapper>
  );
};

export default BoxProduct;
