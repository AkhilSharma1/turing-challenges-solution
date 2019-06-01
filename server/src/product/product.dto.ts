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


export class PaginationDTO {
  productDescriptionLength = 1000;
  productsPerPage = 50;
  offset = 0;
}


// export interface GetProductsInDepartmentDTO{
//   departmentId : string;
//   pagination? : ProductResultsPerPage
// }

// export interface GetProductsInCategoryDTO{
//   categoryID : string;
//   pagination? : ProductResultsPerPage
// }

export class SearchProductsDTO extends PaginationDTO{
  query: string;
  allWords = 'on';
}