import React from "react";

import ItemsDetail from "../ItemsDetail";

const DeleteButton = () => {
    const deleteItem = (productsId) => {
        const updatedproducts = _products.filter(
          (product) => product.id !== productsId
        );
        setProducts(updatedproducts);
  return <div>

<ItemsDetail products={_products} deleteItem={deleteItem} />

  </div>
  );
};

export default DeleteButton;
