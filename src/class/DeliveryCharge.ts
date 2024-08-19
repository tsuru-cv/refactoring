import ShoppingCart from "./ShoppingCart";

export default class DeliveryCharge {
  public readonly amount: number;

  constructor(shoppingCart: ShoppingCart) {
    const totalPrice =
      shoppingCart.products[0].price + shoppingCart.products[1].price;
    this.amount = totalPrice < 2000 ? 500 : 0;
  }
}
