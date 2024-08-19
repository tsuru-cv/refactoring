import ShoppingCart from "./ShoppingCart";

export default class DeliveryCharge {
  public readonly amount: number;

  constructor(shoppingCart: ShoppingCart) {
    this.amount = -1;
  }
}
