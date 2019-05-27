import { Product } from './../src/types/product';
import { HttpStatus } from '@nestjs/common';
import { CreateProductDTO } from './../src/product/product.dto';
import { app } from './constants';
import * as request from 'supertest';
import axios from 'axios';
import { RegisterDTO } from 'src/auth/auth.dto';

let customerToken: string;

const loginDTO: LoginDTO = {
  email: 'ptest@test.com',
  password: 'test',
};

const registerDTO: RegisterDTO = {
  name: 'test_user',
  ...loginDTO,
};

beforeAll(async () => {
 
  const {
    data: { token },
  } = await axios.post(`${app}/auth/register`, registerDTO);

  customerToken = token;
});

afterAll(async done => {
  
});


describe('CUSTOMER', () => {


  it('could read a product', () => {
    request(app)
      .get(`/product/${productId}`)
      .expect(({ body:Product }) => {
         console.log(body)
         expect(body.productId).toBeDefined()
         expect(body.name).toBeDefined()
         expect(body.price).toBeDefined()
      })
      .expect(HttpStatus.OK);
  });


  it('could search for products', () => {
    request(app)
      .get(`/product/${productId}`)
      .expect(({ body:Product }) => {
         console.log(body)
         expect(body.productId).toBeDefined()
         expect(body.name).toBeDefined()
         expect(body.price).toBeDefined()
        // expect(body.).toEqual(product.title);
        // expect(body.description).toEqual(product.description);
        // expect(body.price).toEqual(product.price);
        // expect(body.image).toEqual(product.image);
        // expect(body.owner.username).toEqual(productSeller.username);
      })
      .expect(HttpStatus.OK);
  });


  it('could see list of products with paging', () => {
    request(app)
      .get(`/product/${productId}`)
      .expect(({ body:Product }) => {
         console.log(body)
         expect(body.productId).toBeDefined()
         expect(body.name).toBeDefined()
         expect(body.price).toBeDefined()
      })
      .expect(HttpStatus.OK);
  });


}



describe('PRODUCT', () => {
  let product: CreateProductDTO = {
    title: 'new phone',
    description: 'description',
    price: 10,
    image: 'n/a',
  };

  let productId: string;

  it('should list all products', () => {
    request(app)
      .get('/product')
      .expect(200);
  });
  it('should list my products', () => {
    request(app)
      .get('/product/mine')
      .set(`Authorization`, `Bearer ${sellerToken}`)
      .expect(HttpStatus.OK);
  });
  it('should create product', () => {
    request(app)
      .post('/product')
      .set(`Authorization`, `Bearer ${sellerToken}`)
      .set('Accept', 'application/json')
      .send(product)
      .expect(({ body }) => {
        expect(body._id).toBeDefined();
        productId = body._id;
        expect(body.title).toEqual(product.title);
        expect(body.description).toEqual(product.description);
        expect(body.price).toEqual(product.price);
        expect(body.image).toEqual(product.image);
        expect(body.owner.username).toEqual(productSeller.username);
      })
      .expect(HttpStatus.CREATED);
  });
  it('should read product', () => {
    request(app)
      .get(`/product/${productId}`)
      .expect(({ body:Product }) => {
        console.log(body)
         expect(body.productId).toBeDefined()
         expect(body.name).toBeDefined()
         expect(body.price).toBeDefined()


        // expect(body.).toEqual(product.title);
        // expect(body.description).toEqual(product.description);
        // expect(body.price).toEqual(product.price);
        // expect(body.image).toEqual(product.image);
        // expect(body.owner.username).toEqual(productSeller.username);
      })
      .expect(HttpStatus.OK);
  });

  it('should update product', () => {
    request(app)
      .put(`/product/${productId}`)
      .set(`Authorization`, `Bearer ${sellerToken}`)
      .set('Accept', 'application/json')
      .send({ title: 'new title' })
      .expect(({ body }) => {
        expect(body._id).toEqual(productId);
        expect(body.title).not.toEqual(product.title);
        expect(body.description).toEqual(product.description);
        expect(body.price).toEqual(product.price);
        expect(body.image).toEqual(product.image);
        expect(body.owner.username).toEqual(productSeller.username);
      })
      .expect(HttpStatus.OK);
  });

  it('should delete product', async () => {
    console.log(`${productId} + ${sellerToken}`);
    await axios.delete(`${app}/product/${productId}`, {
      headers: { Authorization: `Bearer ${sellerToken}` },
    });
    request(app)
      .get(`/product/${productId}`)
      .expect(HttpStatus.NO_CONTENT);
  });
});
