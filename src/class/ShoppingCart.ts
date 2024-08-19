import Product from "./Product";

/**
 * 買い物かご
 */
export default class ShoppingCart {
  public readonly products: Product[];

  constructor(products?: Product[]) {
    this.products = products ?? [];
  }

  public add(product: Product) {
    const adding = [...this.products];
    adding.push(product);

    return new ShoppingCart(adding);
  }
}
