import React, { useState } from "react";

//styles

//items list
import BoxProduct from "./BoxProduct";
import { ListWrapper } from "../styles";
import SearchBar from "./SearchBar";
import AddButton from "./Buttons/AddButton";

const ProductList = ({
  products,
  createProduct,
  deleteItem,
  selectVisible,
}) => {
  const [query, setQuery] = useState("");

  const filteredproduct = products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLocaleLowerCase())
    )

    .map((product) => (
      <BoxProduct
        product={product}
        deleteItem={deleteItem}
        selectVisible={selectVisible}
        key={product.id}
      />
    ));

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{filteredproduct}</ListWrapper>;
      <AddButton createProduct={createProduct} />
    </div>
  );
};

export default ProductList;
