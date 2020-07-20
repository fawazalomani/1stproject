import React, { useState } from "react";
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

  const handleToggle = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  const products = [];
  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar handleToggle={handleToggle} setCurrentTheme={setCurrentTheme} />

      <Switch>
        <Route path="/products/:productSlug">
          <ItemsDetail products={products} />
        </Route>
        <Route path="/products">
          <ProductList products={products} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
