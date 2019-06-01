import { CartService } from './cart.service';
import { AddProductToCartDTO } from './cart.dto';
import { Controller, Post, Get, Delete, Param, Query } from '@nestjs/common';

@Controller('cart')
export class CartController {
  constructor(private cartService: CartService) {}

  @Get('recommendations/:cartId')
  async getProductRecommendationsFromCart(
    @Param() cartId: string,
    @Query() productDescLength:number = 1000,
  ) {
    return await this.cartService.getProductRecommendationsFromCart(
      cartId,
      productDescLength,
    );
  }

  @Post()
  async addProductToCart(addProductToCartDTO: AddProductToCartDTO) {
    return await this.cartService.addProductToCart(addProductToCartDTO);
  }

  @Get(':cartId')
  async getCartProducts(@Param() cartId: string) {
    return await this.cartService.getProductsFromCart(cartId);
  }

  @Delete(':itemId')
  async deleteProductFromCart(@Param() itemId: string) {
    return await this.cartService.removeProductFromCart(itemId);
  }
}
