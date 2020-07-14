import React from "react";

//Styles
import { Title, Description, ShopImage } from "../styles";

const Home = () => {
  return (
    <>
      <ShopImage
        src="data:image/jpeg;base64,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"
        alt="logo"
      ></ShopImage>
      <Title>Welcome to Shop</Title>
      <Description> Every thing under one roof</Description>
    </>
  );
};

export default Home;
