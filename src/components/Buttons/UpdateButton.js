import React, { useState } from "react";
import ProductModal from "../modals/ProductModal";

import { UpdateButtonStyled } from "../../styles";

const UpdateButton = ({ product }) => {
  const [isOpen, setIsopn] = useState(false);

  const closeModal = () => setIsopn(false);
  const openModal = () => setIsopn(true);
  return (
    <div>
      <UpdateButtonStyled onClick={openModal}> Update</UpdateButtonStyled>;
      <ProductModal
        isOpen={isOpen}
        closeModal={closeModal}
        oldproduct={product}
      />
    </div>
  );
};

export default UpdateButton;
