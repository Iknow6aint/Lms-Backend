/* eslint-disable prettier/prettier */
// src/modules/academic/controllers/grade.controller.ts
import { Controller, Get, Post, Body, Param, Patch, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { GradeService } from '../services/grade.service';
import { CreateGradeDto } from '../dtos/create-grade.dto';
import { UpdateGradeDto } from '../dtos/';

@ApiTags('Grades')
@Controller('grades')
export class GradeController {
  constructor(private readonly gradeService: GradeService) {}

  @Post()
  @ApiOperation({ summary: 'Create a grade record' })
  @ApiResponse({ status: 201, description: 'Grade record created successfully' })
  @ApiBody({ type: CreateGradeDto })
  @UsePipes(new ValidationPipe())
  async create(@Body() createGradeDto: CreateGradeDto) {
    return this.gradeService.create(createGradeDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a grade record by ID' })
  @ApiResponse({ status: 200, description: 'Grade record found' })
  @ApiParam({ name: 'id', description: 'Grade ID' })
  async findOne(@Param('id') id: string) {
    return this.gradeService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a grade record by ID' })
  @ApiResponse({ status: 200, description: 'Grade record updated successfully' })
  @ApiParam({ name: 'id', description: 'Grade ID' })
  async update(@Param('id') id: string, @Body() updateGradeDto: UpdateGradeDto) {
    return this.gradeService.update(id, updateGradeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a grade record by ID' })
  @ApiResponse({ status: 200, description: 'Grade record deleted successfully' })
  @ApiParam({ name: 'id', description: 'Grade ID' })
  async remove(@Param('id') id: string) {
    return this.gradeService.remove(id);
  }
}
