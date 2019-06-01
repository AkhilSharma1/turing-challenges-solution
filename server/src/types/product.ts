export interface Product {
  product_id: string;
  name: string;
  description: string;
  price: number;
  discountedPrice: number;
  image?: string;
  image2?: string;
  thumbnail?: string;
  display?: number;
}
