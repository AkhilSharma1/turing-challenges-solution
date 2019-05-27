import { ProductService } from './product.service';
import {
  CreateProductDTO,
  PaginationDTO,
  SearchProductsDTO,
  UpdateProductDTO,
} from './product.dto';
import {
  Controller,
  Body,
  Post,
  Get,
  Param,
  Query,
  Put,
  Delete,
  UsePipes,
} from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  // @Post()
  // async createProduct(@Body() createProductDTO: CreateProductDTO) {
  //   return await this.productService.createProduct(createProductDTO);
  // }

  @Get('/search')
  // @UsePipes(new ValidationPipe({ transform: true }))
  async searchProductsInCatalog(@Query() searchProductsDTO: SearchProductsDTO) {
    return await this.productService.searchProductsInCatalog(searchProductsDTO);
  }

  @Get()
  async getAllProductsInCatalog(@Query() paginationDTO: PaginationDTO) {
    console.log('called getAllProductsInCatalog');
    return await this.productService.getAllProductsInCatalog(paginationDTO);
  }

  @Get('/department/:departmentId')
  async getProductsInDepartment(
    @Param() departmentId: string,
    @Query() paginationDTO: PaginationDTO,
  ) {
    return await this.productService.getProductsInDepartment(
      departmentId,
      paginationDTO,
    );
  }

  @Get('/category/:categoryId')
  async getProductsInCategory(
    @Param() categoryId: string,
    @Query() paginationDTO: PaginationDTO,
  ) {
    return await this.productService.getProductsInCategory(
      categoryId,
      paginationDTO,
    );
  }
  @Get(':id')
  async getProduct(@Param('id') id: string) {
    console.log('called with id' + id);
    return await this.productService.getProductById(id);
  }

    @Put(':id')
    async updateProduct(
      @Param('id') id: string,
      @Body() updateProductDTO: UpdateProductDTO,
    ) {
      return await this.productService.updateProductById(id, updateProductDTO);
    }

    @Delete(':id')
    async deleteProduct(@Param('id') id: string) {
      return await this.productService.removeProductById(id);
    }
}
