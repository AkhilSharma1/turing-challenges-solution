import { Product } from './../types/product';
import {
  CreateProductDTO,
  UpdateProductDTO,
  PaginationDTO,
  SearchProductsDTO,
} from './../product/product.dto';
import { Connection } from './db';

export class ProductModel {
  static async createProduct(newProduct: CreateProductDTO) {
    //returns ??
    const query = 'CALL catalog_add_product_to_category(?, ?, ?, ?)';
    return new Connection().exec_query(query, [
      newProduct.categoryId,
      newProduct.name,
      newProduct.description,
      newProduct.price,
    ]);
  }

  static async getProductById(productId: string): Promise<Product> {
    //returns Product
    const query = 'CALL catalog_get_product_details(?)';
    return (await new Connection().exec_query(query, [productId]))[0];
  }

  static async updateProductById(
    productId: string,
    updateProductDTO: UpdateProductDTO,
  ) {
    //returns t/f
    const query = 'CALL catalog_update_product(?, ?, ?, ?, ?)';
    return new Connection().exec_query(query, [
      productId,
      updateProductDTO.name,
      updateProductDTO.description,
      updateProductDTO.price,
      updateProductDTO.discountedPrice,
    ]);
  }

  static async removeProductById(productId: string) {
    let query = 'CALL catalog_delete_product(?)';
    return new Connection().exec_query(query, [productId]);
  }

  static async getAllProductsInCatalog(paginationDTO: PaginationDTO) {
    //returns an array of {product_id, name}
    const query = 'CALL catalog_get_products_on_catalog(?, ?, ?)';
    return new Connection().exec_query(query, [
      // paginationDTO.productDescriptionLength,
      // paginationDTO.productsPerPage,
      // paginationDTO.offset,
      1000,
      50,
      0,
    ]);
  }

  static async getProductsInDepartment(
    departmentId: string,
    paginationDTO: PaginationDTO,
  ) {
    //returns [product_id, name]
    const { productDescriptionLength, productsPerPage, offset } = paginationDTO;

    const query = 'CALL catalog_get_products_on_department(?, ?, ?, ?)';
    return new Connection().exec_query(query, [
      departmentId,
      productDescriptionLength,
      productsPerPage,
      offset,
    ]);
  }

  static async getProductsInCategory(
    categoryId: string,
    paginationDTO: PaginationDTO,
  ) {
    //returns [product_id, name]
    const query = 'CALL catalog_get_products_in_category(?, ?, ?, ?)';
    return new Connection().exec_query(query, [
      categoryId,
      paginationDTO.productDescriptionLength,
      paginationDTO.productsPerPage,
      paginationDTO.offset,
    ]);
  }

  static async searchProductsInCatalog(searchProductsDTO: SearchProductsDTO) {
    console.log('reached model ' + JSON.stringify(searchProductsDTO));

    const query = 'CALL catalog_search(?, ?, ?, ?, ?)';
    // return JSON.stringify(searchProductsDTO)
    return await new Connection().exec_query(query, [
      searchProductsDTO.query,
      searchProductsDTO.allWords,
      searchProductsDTO.productDescriptionLength,
      searchProductsDTO.productsPerPage,
      searchProductsDTO.offset,
    ]);
  }
}
