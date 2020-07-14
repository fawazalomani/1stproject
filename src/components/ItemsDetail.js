import React from "react";
import { DetailWrapper } from "../styles";
import DeleteButton from "./DeleteButton";
import { Link, Redirect, useParams } from "react-router-dom";

const ItemsDetail = ({ products, deleteItem }) => {
  const { productSlug } = useParams();
  const product = products.find((product) => product.slug === productSlug);
  if (!product) return <Redirect to="/products" />;

  return (
    <DetailWrapper>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price}</p>
      <DeleteButton productId={product.id} deleteItem={deleteItem} />
      <Link to="/products">Back to home</Link>
    </DetailWrapper>
  );
};
export default ItemsDetail;
