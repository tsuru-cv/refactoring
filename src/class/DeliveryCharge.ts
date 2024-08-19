import ShoppingCart from "./ShoppingCart";

export default class DeliveryCharge {
  private readonly CHARGE_FREE_THRESHOLD = 2000;
  private readonly PAY_CHARGE = 500;
  private readonly CHARGE_FREE = 0;

  public readonly amount: number;

  constructor(shoppingCart: ShoppingCart) {
    this.amount =
      shoppingCart.totalPrice() < this.CHARGE_FREE_THRESHOLD
        ? this.PAY_CHARGE
        : this.CHARGE_FREE;
  }
}
