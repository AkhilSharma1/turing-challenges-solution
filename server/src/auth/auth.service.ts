import { Payload } from './../types/payload';
import { Injectable } from '@nestjs/common';
import { UserService } from '../shared/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signPayload(payload: Payload) {
    return this.jwtService.sign(payload);
  }

  async validateUser(payload: Payload) {
    return await this.userService.findByPayload(payload);
  }
}
