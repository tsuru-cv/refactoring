import Product from "./Product";

export default class ShoppingCart {
  private readonly products: Product[];

  constructor(products?: Product[]) {
    this.products = products ?? [];
  }

  public add(product: Product) {
    return new ShoppingCart([...this.products, product]);
  }

  public totalPrice() {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }
}
