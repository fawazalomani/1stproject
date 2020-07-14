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
