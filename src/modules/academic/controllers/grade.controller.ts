/* eslint-disable prettier/prettier */
// src/modules/academic/controllers/grade.controller.ts
import { Controller, Get, Post, Body, Param, Delete, Put, HttpCode, Logger } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { GradeService } from '../services/grade.service';
import { CreateGradeDto } from '../dtos/create-grade.dto';

@ApiTags('grades')
@Controller('grades')
export class GradeController {
  private readonly logger = new Logger(GradeController.name);

  constructor(private readonly gradeService: GradeService) {}

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create a new grade' })
  @ApiResponse({ status: 201, description: 'Grade created successfully.' })
  async create(@Body() createGradeDto: CreateGradeDto) {
    this.logger.log('Creating a new grade');
    return this.gradeService.create(createGradeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all grades' })
  async findAll() {
    this.logger.log('Fetching all grades');
    return this.gradeService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a grade by ID' })
  @ApiParam({ name: 'id', required: true, description: 'Grade ID' })
  async findOne(@Param('id') id: string) {
    this.logger.log(`Fetching grade with ID ${id}`);
    return this.gradeService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a grade by ID' })
  @ApiParam({ name: 'id', required: true, description: 'Grade ID' })
  async update(@Param('id') id: string, @Body() updateGradeDto: CreateGradeDto) {
    this.logger.log(`Updating grade with ID ${id}`);
    return this.gradeService.update(id, updateGradeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a grade by ID' })
  @ApiParam({ name: 'id', required: true, description: 'Grade ID' })
  async remove(@Param('id') id: string) {
    this.logger.log(`Deleting grade with ID ${id}`);
    return this.gradeService.remove(id);
  }
}
