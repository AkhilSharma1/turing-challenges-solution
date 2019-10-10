export interface AddProductToCartDTO {
  cartId: string;
  productId: string;
  attributes: string;
}

export interface UpdateProductInCartDTO {
  itemId: string;
  quantity: number;
}
