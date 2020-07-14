import { decorate, observable } from "mobx";
import slugify from "react-slugify";

//data
import products from "../items";

class ProductStore {
  products = products;
  createProduct = (newProduct) => {
    newProduct.id = this.products[this.products.length - 1].id + 1;
    newProduct.slug = slugify(newProduct.name);
    this.products.push(newProduct);
  };
  deleteItem = (productsId) => {
    this.products = this.products.filter(
      (product) => product.id !== productsId
    );
  };
}

decorate(ProductStore, {
  products: observable,
});

const productStore = new ProductStore();

export default productStore;
