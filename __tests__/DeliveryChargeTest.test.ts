import DeliveryCharge from "../src/class/DeliveryCharge";
import Product from "../src/class/Product";
import ShoppingCart from "../src/class/ShoppingCart";

describe("DeliveryChargeTest", () => {
  it("商品の合計金額が2000円未満の場合、配送料は500円。", () => {
    const emptyCart = new ShoppingCart();
    const oneProductAdded = emptyCart.add(new Product(1, "商品A", 500));
    const twoProductAdded = oneProductAdded.add(new Product(2, "商品B", 1499));
    const charge = new DeliveryCharge(twoProductAdded);
    expect(charge.amount).toBe(500);
  });

  it("商品の合計金額が2000円以上の場合、配送料は無料。", () => {
    const emptyCart = new ShoppingCart();
    const oneProductAdded = emptyCart.add(new Product(1, "商品A", 500));
    const twoProductAdded = oneProductAdded.add(new Product(2, "商品B", 1500));
    const charge = new DeliveryCharge(twoProductAdded);
    expect(charge.amount).toBe(0);
  });
});
