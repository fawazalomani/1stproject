import React, { useState } from "react";
import { observer } from "mobx-react";

//styles

//items list
import BoxProduct from "./BoxProduct";
import { ListWrapper } from "../styles";
import SearchBar from "./SearchBar";
import AddButton from "./Buttons/AddButton";
// stores
import productStore from "../stores/productStore";

const ProductList = ({ selectVisible }) => {
  const [query, setQuery] = useState("");

  const ProductList = productStore.products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLocaleLowerCase())
    )

    .map((product) => (
      <BoxProduct
        product={product}
        selectVisible={selectVisible}
        key={product.id}
      />
    ));

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{ProductList}</ListWrapper>
      <AddButton />
    </div>
  );
};

export default observer(ProductList);
