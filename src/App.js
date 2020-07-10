import React, { useState } from "react";
import products from "./items";
import "bootstrap/dist/css/bootstrap.min.css";

// components
import ProductList from "./components/ProductList";

// ItemsDetail
import ItemsDetail from "./components/ItemsDetail";
//styles
import {
  GlobalStyle,
} from "./styles";
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

  const [visible, umVisible] = useState(null);
  const [product, umproduct] = useState(products);

  const [_products, setProducts] = useState(products);

  const deleteItem = (productsId) => {
    const updatedproducts = _products.filter(
      (product) => product.id !== productsId
    );
    setProducts(updatedproducts);

  };

  const selectVisible = (prodectid) => {
    const selectVisible = products.find((product) => product.id === prodectid);
    umproduct(selectVisible);
    umVisible(!visible);
  };

  const handleToggle = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  const buttonText = currentTheme === "light" ? "Dark Mode" : "Light Mode";

  return (
    <ThemeProvider theme={currentTheme === "light" ? theme.light : theme.dark}>
      <GlobalStyle />
      <NavBar handleToggle={handleToggle} setCurrentTheme={setCurrentTheme} buttonText={buttonText} />

      <Switch>
        <Route path="/products">
          {visible ? (
            <ItemsDetail product={product} deleteItem={deleteItem} selectVisible={selectVisible} />
          ) : (
              <ProductList products={_products} deleteItem={deleteItem} selectVisible={selectVisible} />
            )}

        </Route>
        <Route path="/">
          <Home />
        </Route>

        <Route path="/products/:productId">
          <ItemsDetail product={product} deleteItem={deleteItem} />

        </Route>

      </Switch>

    </ThemeProvider>
  );
}

export default App;

