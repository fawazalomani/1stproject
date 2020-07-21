import { decorate, observable } from "mobx";
import slugify from "react-slugify";
import axios from "axios";

//data

class ProductStore {
  products = [];

  fetchProducts = async () => {
    const res = await axios.get("http://localhost:8000/products");
    console.log("ProductStore->fetchProducts->res", res);
    this.products = res.data;
  };

  createProduct = async (newProduct) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/products",
        newProduct
      );
      this.products.push(res.data);
    } catch (error) {
      console.log("ProductStore->createProduct->error", error);
    }
  };

  updateProduct = (updateProduct) => {
    const product = this.product.find(
      (product) => product.id === updateProduct.id
    );

    //product.name = updateProduct.name;
    //product.price = updateProduct.price;
    //product.image = updateProduct.image;
    //product.description = updateProduct.description;

    for (const key in product) product[key] = updateProduct[key];
  };

  deleteItem = async (productId) => {
    try {
      await axios.delete(`http://localhost:8000/products/${productId}`);
      this.products = this.products.filter(
        (product) => product.id !== productId
      );
    } catch (error) {
      console.log("productStore->deleteProduct->error", error);
    }
  };
}

decorate(ProductStore, {
  products: observable,
});

const productStore = new ProductStore();
productStore.fetchProducts();

export default productStore;
