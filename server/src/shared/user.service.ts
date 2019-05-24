import { UserModel } from './../models/user.model';
import { Payload } from '../types/payload';
import { User } from '../types/user';
import { RegisterDTO, LoginDTO } from '../auth/auth.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  // constructor() {}

  private sanitizeUser(user: User) {
    let sanitizedUser = { ...user };
    delete sanitizedUser.password;

    return sanitizedUser;
  }

  async create(registerDTO: RegisterDTO) {
    const { email } = registerDTO;
    //userEntry is {customerId, password}
    const userEntry = await UserModel.findUser(email);
    console.log(userEntry)
    if (userEntry) {
      console.log(2)
      throw new HttpException('User already exists!', HttpStatus.BAD_REQUEST);
    }
   console.log()

    const customerId = (await UserModel.createUser(registerDTO))[0][
      'LAST_INSERT_ID()'
    ];
    const user = await UserModel.getUserDetails(customerId);
    return this.sanitizeUser(user[0]);
  }
  async findByLogin(loginDTO: LoginDTO): Promise<User> {
    const { email, password } = loginDTO;
    const user = await UserModel.findUser(email);

    if (!user) {

      throw new HttpException('Invalid Credentials!', HttpStatus.UNAUTHORIZED);
    }

    // TODO: check why this doesn't work
    // if (await bcrypt.compare(password, user.password)) {
      // console.log('user is ' +JSON.stringify(user))
    if (password === user.password) {


      const details = await UserModel.getUserDetails(user.customer_id);
      // console.log('details is ' +JSON.stringify(details))

      return this.sanitizeUser(details[0]);
    } else {
      throw new HttpException('Invalid Credentials!', HttpStatus.UNAUTHORIZED);
    }
  }

  async findByPayload(payload: Payload) {
    const { email } = payload;
    return await UserModel.findUser(email);
  }

  // async findAll() {
  //   return this.userModel.find({});
  // }
}
