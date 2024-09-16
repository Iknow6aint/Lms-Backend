/* eslint-disable prettier/prettier */
// src/authentication/authentication.controller.ts

import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { UserRole } from './schemas/user.schema';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}

  @Post('register')
  async register(
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('role') role: UserRole,
    @Body('schoolId') schoolId: string,
  ) {
    return this.authService.register(email, password, role, schoolId);
  }

  @Post('login')
  async login(@Body('email') email: string, @Body('password') password: string) {
    return this.authService.login(email, password);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
