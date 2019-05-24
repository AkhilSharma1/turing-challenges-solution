import { Connection } from './../src/models/db';
import 'dotenv/config';
import { app } from './constants';
import { LoginDTO } from './../src/auth/auth.dto';
import { HttpStatus } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { RegisterDTO } from 'src/auth/auth.dto';
import { async } from 'rxjs/internal/scheduler/async';

beforeAll(async () => {
  await new Connection().exec_query(`DELETE FROM customer`, []);
});

afterAll(async () => {
  await new Connection().exec_query(`DELETE FROM customer`, []);
});

describe('AUTH', () => {
  const loginDTO: LoginDTO = {
    email: 'test@test.com',
    password: 'test',
  };

  const registerDTO: RegisterDTO = {
    name: 'test_user',
    ...loginDTO,
  };

  it('should register user', () => {
    return request(app)
      .post('/auth/register')
      .set('Accept', 'application/json')
      .send(registerDTO)
      .expect(({ body }) => {
        expect(body.token).toBeDefined();
        expect(body.user.email).toEqual(loginDTO.email);
        expect(body.user.password).toBeUndefined();
      }) // good idea to see the body for failing tests like this
      .expect(HttpStatus.CREATED);
  });

  it('should reject duplicate user registration', () => {
    return request(app)
      .post('/auth/register')
      .set('Accept', 'application/json')
      .send(registerDTO)
      .expect(({ body }) => {
        // console.log(body);
        expect(body.message).toEqual('User already exists!');
      }) // good idea to see the body for failing tests like this
      .expect(HttpStatus.BAD_REQUEST);
  });
  it('should login user', () => {
    return request(app)
      .post('/auth/login')
      .set('Accept', 'application/json')
      .send(loginDTO)
      .expect(({ body }) => {
        expect(body.token).toBeDefined();
        expect(body.user.email).toEqual(loginDTO.email);
        expect(body.user.password).toBeUndefined();
      })
      .expect(HttpStatus.CREATED);
  });
});
