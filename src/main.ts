import DeliveryCharge from "./class/DeliveryCharge";
import Product from "./class/Product";
import ShoppingCart from "./class/ShoppingCart";

const shoppingCart = new ShoppingCart([
  new Product(1, "商品A", 500),
  new Product(2, "商品B", 1500),
]);
const deliveryCharge = new DeliveryCharge(shoppingCart);

console.log("charge: ", deliveryCharge.amount);
