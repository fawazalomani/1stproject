import React from "react";
import { DetailWrapper } from "../styles";
import DeleteButton from "./DeleteButton";
import { Link, Redirect, useParams } from "react-router-dom";
import productStore from "../stores/productStore";
import { observer } from "mobx-react";

const ItemsDetail = () => {
  const { productSlug } = useParams();
  const product = productStore.products.find(
    (product) => product.slug === productSlug
  );
  if (!product) return <Redirect to="/products" />;

  return (
    <DetailWrapper>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price}</p>
      <DeleteButton productId={product.id} />
      <Link to="/products">Back to home</Link>
    </DetailWrapper>
  );
};
export default observer(ItemsDetail);
