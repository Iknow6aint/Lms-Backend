/* eslint-disable prettier/prettier */
// src/school/school.controller.ts

import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { SchoolService } from './school.service';

@Controller('schools')
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @Post()
  async createSchool(@Body() createSchoolDto: any) {
    return this.schoolService.createSchool(createSchoolDto);
  }

  @Get()
  async getAllSchools() {
    return this.schoolService.getAllSchools();
  }

  @Get(':id')
  async getSchoolById(@Param('id') id: string) {
    return this.schoolService.getSchoolById(id);
  }
}
