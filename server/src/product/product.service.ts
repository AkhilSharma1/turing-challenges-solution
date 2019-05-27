import { ProductModel } from './../models/product.model';
import {
  CreateProductDTO,
  UpdateProductDTO,
  ProductResultsPerPage,
} from './product.dto';
import { Injectable } from '@nestjs/common';
import { Product } from '../types/product';

@Injectable()
export class ProductService {
  async createProduct(createProductDTO: CreateProductDTO): Promise<Product> {
    const id = await ProductModel.createProduct(createProductDTO);
    return await this.getProductById(id);
  }

  async getProductById(id: string): Promise<Product> {
    return await ProductModel.getProductById(id);
  }

  async updateProductById(
    id: string,
    updateProductDTO: UpdateProductDTO,
  ): Promise<Product> {
    await ProductModel.updateProductById(id, updateProductDTO);
    return await this.getProductById(id);
  }

  async removeProductById(id: string) {
    await ProductModel.removeProductById(id);
  }

  async getAllProductsInCatalog(productResultsPerPage: ProductResultsPerPage) {
    await ProductModel.getAllProductsInCatalog(productResultsPerPage);
  }
}
