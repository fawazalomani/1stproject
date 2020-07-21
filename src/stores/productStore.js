import { decorate, observable } from "mobx";
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

  updateProduct = async (updateProduct) => {
    try {
      await axios.put(
        `http://localhost:8000/products/${updateProduct.id}`,
        updateProduct
      );
      const product = this.products.find(
        (product) => product.id === updateProduct.id
      );

      for (const key in updateProduct) product[key] = updateProduct[key];
    } catch (error) {
      console.log("ProductStore->updateProduct->error", error);
    }
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
