import 'dotenv/config';
import { HttpException, HttpStatus } from '@nestjs/common';
import * as mysql from 'mysql2/promise';

const config = {
  connectionLimit: +process.env.MYSQL_CONNECTION_LIMIT,
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.NODE_ENV === 'test' ? process.env.MYSQL_TEST_DATABASE:process.env.MYSQL_DATABASE,
};
// console.log(config)

const pool = mysql.createPool(config);

export class Connection {

  async exec_query(query: string, params: string[]) {
    try {
      console.log('at exec_query' + query + JSON.stringify(params))
      const result = await pool.query(query, params);
      console.log('got result' +  JSON.stringify(result[0][0]))
      return result[0][0];
    } catch (error) {
      console.log('in sql error' + error)
      throw new HttpException(error.code, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
