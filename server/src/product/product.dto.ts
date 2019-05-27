export interface CreateProductDTO {
  categoryId: string;
  productId: string;
  name: string;
  description: string;
  price: number;
  discountedPrice: number;
  image?: string;
  image2?: string;
  thumbnail?: string;
  display?: number;
}

export type UpdateProductDTO = Partial<CreateProductDTO>;


export interface ProductResultsPerPage {
  productDescriptionLength = 500;
  productsPerPage = 50;
  offset = 0;
}


export interface GetProductsInDepartmentDTO{
  departmentId : string;
  pagination? : ProductResultsPerPage
}

export interface GetProductsInCategoryDTO{
  categoryID : string;
  pagination? : ProductResultsPerPage
}

export interface SearchProductsDTO{
  searchString: string;
  allWords = 'on';
  pagination? : Pagination
}