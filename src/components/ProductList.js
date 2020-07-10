import React, { useState } from "react";

//styles

//items list
import BoxProduct from "./BoxProduct";
import { ListWrapper } from "../styles";
import SearchBar from "./SearchBar";




const ProductList = (props) => {

  const [query, setQuery] = useState("");

  const filteredproduct = props.products.filter((product) => product.name.toLowerCase().includes(query.toLocaleLowerCase()))

    .map((product) => (
      <BoxProduct
        product={product}
        deleteItem={props.deleteItem}
        selectVisible={props.selectVisible}
        key={product.id}
      />
    ));

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{filteredproduct}</ListWrapper>;
    </>);
};

export default ProductList;
