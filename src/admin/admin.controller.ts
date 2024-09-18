/* eslint-disable prettier/prettier */
// src/admin/admin.controller.ts

import { Controller, Get, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { JwtAuthGuard } from '../authentication/guards/jwt-auth.guard';
import { RolesGuard } from '../authentication/guards/roles.guard';
import { Roles } from '../authentication/decorators/roles.decorator';
import { UserRole } from '../authentication/schemas/user.schema';

@Controller('admin')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(UserRole.ADMIN) // Only admins can access these routes
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('statistics')
  async getStatistics() {
    return this.adminService.getStatistics();
  }

  @Get('schools')
  async getAllSchools() {
    return this.adminService.getAllSchools();
  }
}
