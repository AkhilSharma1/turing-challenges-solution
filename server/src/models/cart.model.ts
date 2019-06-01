import { Connection } from './db';
import {
  AddProductToCartDTO,
  UpdateProductInCartDTO,
} from './../cart/cart.dto';

export class ShoppingCartModel {
  static async addProductToCart(addProductToCartDTO: AddProductToCartDTO) {
    const query = 'CALL shopping_cart_add_product(?, ?, ?)';

    return await new Connection().exec_query(query, [
      addProductToCartDTO.cartId,
      addProductToCartDTO.productId,
      addProductToCartDTO.attributes,
    ]);
  }

  static async updateProductInCart(
    updateProductInCartDTO: UpdateProductInCartDTO,
  ) {
    const query = 'CALL shopping_cart_update(?, ?)';

    return await new Connection().exec_query(query, [
      updateProductInCartDTO.itemId,
      updateProductInCartDTO.quantity,
    ]);
  }
  static async getTotalAmountFromCart(cartId: string) {
    const query = 'CALL shopping_cart_get_total_amount(?)';

    return await new Connection().exec_query(query, [cartId]);
  }
  static async getSavedProductsFromCart(cartId: string) {
    const query = 'CALL shopping_cart_get_saved_products(?)';

    return await new Connection().exec_query(query, [cartId]);
  }

  static async getProductsFromCart(cartId: string) {
    const query = 'CALL shopping_cart_get_products(?)';

    return await new Connection().exec_query(query, [cartId]);
  }
  static async removeProductFromCart(itemId: string) {
    const query = 'CALL shopping_cart_remove_product(?)';

    return await new Connection().exec_query(query, [itemId]);
  }

  static async getProductRecommendationsFromCart(cartId: string, productDescLength:number) {
    const query = 'CALL shopping_cart_get_recommendations(?,?)';

    return await new Connection().exec_query(query, [cartId, productDescLength]);
  }

  // shopping_cart_create_order
}
