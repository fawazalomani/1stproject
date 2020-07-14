import React, { useState } from "react";

import Modal from "react-modal";
import { CreateButtonStyled } from "../../styles";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const ProductModal = ({ isOpen, closeModal, createProduct }) => {
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
    image: "",
  });
  const handleChange = (event) => {
    const newProduct = { ...product, [event.target.name]: event.target.value };
    setProduct(newProduct);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    createProduct(product);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Product Modal"
    >
      <h3> New Product</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              required
              name="name"
              type="text"
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col-6">
            <label>Price</label>
            <input
              name="price"
              type="number"
              min="1"
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            name="description"
            type="text"
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            name="image "
            type="img"
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <CreateButtonStyled>Create</CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default ProductModal;
