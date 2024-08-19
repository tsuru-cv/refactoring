import Product from "./Product";

/**
 * 配送管理クラス
 */
export default class DeliveryManager {
  /**
   * 配送料を返す
   */
  public static deliveryCharge(products: Product[]) {
    const totalPrice = products.reduce(
      (total, product) => total + product.price,
      0
    );

    return totalPrice < 2000 ? 500 : 0;
  }
}
