import React, { useState } from "react";
import ProductModal from "../modals/ProductModal";
import { BsFillPlusSquareFill } from "react-icons/bs";

const AddBotton = () => {
  const [isOpen, setIsopen] = useState(false);

  const closeModal = () => setIsopen(false);
  const openeModal = () => setIsopen(true);

  return (
    <div>
      <BsFillPlusSquareFill
        className="float-right"
        size="2em"
        onClick={openeModal}
      />
      <ProductModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};
export default AddBotton;
