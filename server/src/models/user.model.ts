import { RegisterDTO } from 'src/auth/auth.dto';
import { Connection } from './db';
import { User } from '../types/user';

export class UserModel {
  static async createUser(registerDTO: RegisterDTO): Promise<string> {
    const query = 'CALL customer_add(?, ?, ?)';
    //returns customer id
    return new Connection().exec_query(query, [
      registerDTO.name,
      registerDTO.email,
      registerDTO.password,
    ]);
  }

  static async findUser(email: string) {
    const query = 'CALL customer_get_login_info(?)';
    //returns {customerid,password}
    const logininfo = await new Connection().exec_query(query, [email]);

    return logininfo[0];
  }

   static async getUserDetails(customerId: string) {
    const query = 'CALL customer_get_customer(?)';
     const userDetails = await new Connection().exec_query(query, [customerId]);
    //returns User
    return userDetails;
  }

  static updateAddress(user: User) {
    const query = 'CALL customer_update_address(?, ?, ?, ?, ?, ?, ?, ?)';
    const {
      address1,
      address2,
      city,
      region,
      postalCode,
      country,
      shippingRegionID,
    } = user.address;

    return new Connection().exec_query(query, [
      user.customer_id,
      address1,
      address2,
      city,
      region,
      postalCode,
      country,
      shippingRegionID,
    ]);
  }

  static updateAccount(user: User) {
    const query = 'CALL customer_update_account(?, ?, ?, ?, ?, ?, ?)';
    const {
      address: { dayPhone, evePhone, mobPhone },
    } = user;

    return new Connection().exec_query(query, [
      user.customer_id,
      user.name,
      user.email,
      user.password,
      dayPhone,
      evePhone,
      mobPhone,
    ]);
  }
  static updateCreditcard({ customerId, creditCard }) {
    const query = 'CALL customer_update_credit_card(?, ?)';

    return new Connection().exec_query(query, [customerId, creditCard]);
  }
}
