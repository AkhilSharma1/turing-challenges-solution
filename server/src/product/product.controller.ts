import { ProductService } from './product.service';
import {
  CreateProductDTO,
  ProductResultsPerPage,
  GetProductsInDepartmentDTO,
  GetProductsInCategoryDTO,
} from './product.dto';
import { Controller, Body, Post, Get, Param } from '@nestjs/common';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  async createProduct(@Body() createProductDTO: CreateProductDTO) {
    return await this.productService.createProduct(createProductDTO);
  }

  @Get(':id')
  async getProduct(@Param('id') id: string) {
    return await this.productService.getProductById(id);
  }

  @Get()
  async getAllProductsInDepartment(
    @Body() getProductsInDepartmentDTO: GetProductsInDepartmentDTO,
  ) {
    return await this.productService.getAllProductsInDepartment(
      getProductsInDepartmentDTO,
    );
  }

  @Get()
  async getAllProductsInCatalog(
    @Body() productResultsPerPage: ProductResultsPerPage,
  ) {
    return await this.productService.getAllProductsInCatalog(
      productResultsPerPage,
    );
  }

  @Get()
  async getAllProductsInCategory(
    @Body() getProductsInCategoryDTO: GetProductsInCategoryDTO,
  ) {
    return await this.productService.getAllProductsInCategory(
      getProductsInCategoryDTO,
    );
  }
}
