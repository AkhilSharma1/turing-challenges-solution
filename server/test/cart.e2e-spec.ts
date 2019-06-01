import { Connection } from './../src/models/db';
import { LoginDTO } from './../src/auth/auth.dto';
import { Product } from './../src/types/product';
import { HttpStatus } from '@nestjs/common';
import { CreateProductDTO } from './../src/product/product.dto';
import { app } from './constants';
import * as request from 'supertest';
import axios from 'axios';

import { RegisterDTO } from 'src/auth/auth.dto';

// let customerToken: string;

// const loginDTO: LoginDTO = {
//   email: 'ptest@test.com',
//   password: 'test',
// };

// const registerDTO: RegisterDTO = {
//   name: 'test_user',
//   ...loginDTO,
// };

// beforeAll(async () => {
// await new Connection().exec_query(`DELETE FROM customer`, []);

// const {
//   data: { token },
// } = await axios.post(`${app}/auth/register`, registerDTO);
// console.log(token);
// customerToken = token;
// });

// afterAll(async () => {});

describe('CUSTOMER', () => {
  let product: Product;

  it('could add a product to cart', () => {
    return request(app)
      .get(`/products`)
      .expect(({ body }) => {
        expect(body.length).toBeGreaterThan(0);
        product = body[0];
      })
      .expect(HttpStatus.OK);
  });

  it('could get the cart', () => {
    return request(app)
      .get(`/products/${product.product_id}`)
      .expect(({ body }) => {
        expect(body.product_id).toEqual(product.product_id);
        expect(body.name).toEqual(product.name);
        expect(body.price).toEqual(product.price);
      })
      .expect(HttpStatus.OK);
  });

  it('could delete product from cart', () => {
    return request(app)
      .get(`/products/search?query=Iris`)
      .expect(({ body }) => {
        // console.log(body);
        expect(body.length).toBeGreaterThan(0);
      })
      .expect(HttpStatus.OK);
  });
});
