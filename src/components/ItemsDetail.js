import React from "react";
import { DetailWrapper } from "../styles";
import DeleteButton from "./DeleteButton";
import { Link, Redirect, useParams } from "react-router-dom";
import products from "../items";
const ItemsDetail = (props) => {
  const product = props.product;
  const { productId } = useParams();
  // I now that the redirect not use in the right way but I 
  //understand that the redirect if the user use any products 
  //not offer in my web will return in the link was linked.
  if (!product) return <Redirect to="/prodcuts" />


  // I use the home page here because I now there is
  // problem in my detial detials and I think that
  // the detial and the list are used same the path 



  return (
    <DetailWrapper>


      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price}</p>
      <DeleteButton productId={product.id} deleteItem={props.deleteItem} />
      <Link to="/">Back to home</Link>
    </DetailWrapper>
  );
}
export default ItemsDetail;
