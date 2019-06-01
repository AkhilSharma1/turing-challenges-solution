import { ShoppingCartModel } from './../models/cart.model';
import { AddProductToCartDTO, UpdateProductInCartDTO } from './cart.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CartService {
  async addProductToCart(addProductToCartDTO: AddProductToCartDTO) {
    return await ShoppingCartModel.addProductToCart(addProductToCartDTO);
  }

  async updateProductInCart(updateProductInCartDTO: UpdateProductInCartDTO) {
    return await ShoppingCartModel.updateProductInCart(updateProductInCartDTO);
  }

  async getTotalAmountFromCart(cartId: string) {
    return await ShoppingCartModel.getTotalAmountFromCart(cartId);
  }

  async getSavedProductsFromCart(cartId: string) {
    return await ShoppingCartModel.getSavedProductsFromCart(cartId);
  }

  async getProductsFromCart(cartId: string) {
    return await ShoppingCartModel.getProductsFromCart(cartId);
  }

  async removeProductFromCart(itemId: string) {
    return await ShoppingCartModel.removeProductFromCart(itemId);
  }

  async getProductRecommendationsFromCart(
    cartId: string,
    productDescLength: number,
  ) {
    return await ShoppingCartModel.getProductRecommendationsFromCart(
      cartId,
      productDescLength,
    );
  }
}
