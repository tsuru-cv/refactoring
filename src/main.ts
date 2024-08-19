import DeliveryManager from "./class/DeliveryManager";
import Product from "./class/Product";

export function add(a: number, b: number): number {
  return a + b;
}

console.log(
  "charge: ",
  DeliveryManager.deliveryCharge([
    new Product(1, "商品A", 500),
    new Product(2, "商品B", 1499),
  ])
);
