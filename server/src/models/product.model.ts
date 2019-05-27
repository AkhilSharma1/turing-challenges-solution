import { Product } from './../types/product';
import {
  CreateProductDTO,
  UpdateProductDTO,
  GetProductsInDepartmentDTO,
} from './../product/product.dto';
import { Connection } from './db';

export class ProductModel {
  static async createProduct(newProduct: CreateProductDTO){
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
    return new Connection().exec_query(query, [productId]);
  }

  static async updateProductById(
    updateProductDTO: UpdateProductDTO,
  ) {
    //returns t/f
    const query = 'CALL catalog_update_product(?, ?, ?, ?, ?)';
    return new Connection().exec_query(query, [
      updateProductDTO.productId,
      updateProductDTO.name,
      updateProductDTO.description,
      updateProductDTO.price,
      updateProductDTO.discountedPrice,
    ]);
  }

  static async removeProductById(productId: string) {
    let query = 'CALL catalog_delete_product(?)';
    new Connection().exec_query(query, [productId]);
  }

  static async getAllProductsInCatalog(
    productResultsPerPage: ProductResultsPerPage,
  ) {
    //returns an array of {product_id, name}
    const query = 'CALL catalog_get_products_on_catalog(?, ?, ?)';
    return new Connection().exec_query(query, [
      productResultsPerPage.productDescriptionLength,
      productResultsPerPage.productsPerPage,
      productResultsPerPage.offset,
    ]);
  }

  static async (
    getProductsInDepartmentDTO: GetProductsInDepartmentDTO,
  ) {
    //returns [product_id, name]
    const query = 'CALL catalog_get_products_on_department(?, ?, ?, ?)';
    return new Connection().exec_query(query, [
      getProductsInDepartmentDTO.departmentIdgetAllProductsInDepartment,
      getProductsInDepartmentDTO.productDescriptionLength,
      getProductsInDepartmentDTO.productsPerPage,
      getProductsInDepartmentDTO.offset,
    ]);
  }

  static async getAllProductsInCategory(
    getProductsInCategoryDTO: GetProductsInCategoryDTO,
  ) {
    //returns [product_id, name]
    const query = 'CALL catalog_get_products_in_category(?, ?, ?, ?)';
    return new Connection().exec_query(query, [
      getProductsInCategoryDTO.categoryId,
      getProductsInCategoryDTO.productDescriptionLength,
      getProductsInCategoryDTO.productsPerPage,
      getProductsInCategoryDTO.offset,
    ]);
  }

  static async searchProducts(searchProductsDTO: SearchProductsDTO) {
    //returns [product_id, name]
    const query = 'CALL catalog_search(?, ?, ?, ?, ?)';
    return new Connection().exec_query(query, [
      searchProductsDTO.searchString,
      searchProductsDTO.allWords,
      searchProductsDTO.productDescriptionLength,
      searchProductsDTO.productsPerPage,
      searchProductsDTO.offset,
    ]);
  }
}
