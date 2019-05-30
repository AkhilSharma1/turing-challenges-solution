import { Payload } from '../types/payload';
import { AuthService } from './auth.service';
import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { UserService } from '../shared/user.service';
import { LoginDTO, RegisterDTO } from './auth.dto';
import { AuthGuard } from '@nestjs/passport';
// import { User } from 'src/utils/user.decorator';

@Controller('auth')
export class AuthController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  // just to check auth, remove afterwords
  // @Get()
  // @UseGuards(AuthGuard('jwt'), SellerGuard)
  // async findAll(@User() user: any) {
  //   console.log(user)
  //   return await this.userService.findAll();
  // }

  // @Get()
  // @UseGuards(AuthGuard('jwt'))
  // tempAuth() {
  //   return { auth: 'Works!!!' }
  // }

  @Post('login')
  async login(@Body() loginDTO: LoginDTO) {
    const user = await this.userService.findByLogin(loginDTO);
    // console.log('1111' + JSON.stringify(user))
    const payload: Payload = {
      email: user.email,
    };
    const token = await this.authService.signPayload(payload);
    return { user, token };
  }

  @Post('register')
  async register(@Body() registerDTO: RegisterDTO) {
    const user = await this.userService.create(registerDTO);
    const payload: Payload = {
      email: user.email,
    };
    const token = await this.authService.signPayload(payload);
    return { user, token };
  }
}
