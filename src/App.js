import React, { useState } from "react";
import slugify from "react-slugify";
import products from "./items";
import "bootstrap/dist/css/bootstrap.min.css";
//  const buttonText = currentTheme === "light" ? "Dark Mode" : "Light Mode";
//        buttonText={buttonText}
// components
import ProductList from "./components/ProductList";

// ItemsDetail
import ItemsDetail from "./components/ItemsDetail";
//styles
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";
import Home from "./components/Home";
import { Route, Switch } from "react-router";
import NavBar from "./NavBar";
const theme = {
  light: {
    maincolor: "black ",
    backgroundColor: "white",
    green: "black",
  },

  dark: {
    maincolor: "white ",
    backgroundColor: "black",
    green: "white",
    red: "red",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const [_products, setProducts] = useState(products);

  const createProduct = (newProduct) => {
    const updatedproducts = [..._products, newProduct];
    newProduct.id = _products[_products.length - 1].id + 1;
    newProduct.slug = slugify(newProduct.name);

    setProducts(updatedproducts);
  };

  const deleteItem = (productsId) => {
    const updatedproducts = _products.filter(
      (product) => product.id !== productsId
    );
    setProducts(updatedproducts);
  };

  const handleToggle = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar handleToggle={handleToggle} setCurrentTheme={setCurrentTheme} />

      <Switch>
        <Route path="/products/:productSlug">
          <ItemsDetail products={_products} deleteItem={deleteItem} />
        </Route>
        <Route path="/products">
          <ProductList
            products={_products}
            createProduct={createProduct}
            deleteItem={deleteItem}
          />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
