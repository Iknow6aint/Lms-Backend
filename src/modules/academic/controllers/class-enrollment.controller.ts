/* eslint-disable prettier/prettier */
// src/modules/academic/controllers/class-enrollment.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  HttpCode,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { ClassEnrollmentService } from '../services/class-enrollment.service';
import { CreateClassEnrollmentDto } from '../dtos/create-class-enrollment.dto';
import { ClassEnrollment } from '../schemas/class-enrollment.schema';

@ApiTags('Class Enrollments')
@Controller('class-enrollments')
export class ClassEnrollmentController {
  private readonly logger = new Logger(ClassEnrollmentController.name);

  constructor(private readonly classEnrollmentService: ClassEnrollmentService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Enroll a student in a class' })
  @ApiResponse({ status: 201, description: 'Student enrolled in class successfully.', type: ClassEnrollment })
  @ApiBody({ type: CreateClassEnrollmentDto })
  async create(@Body() createClassEnrollmentDto: CreateClassEnrollmentDto): Promise<ClassEnrollment> {
    this.logger.log('Creating a new class enrollment');
    return this.classEnrollmentService.create(createClassEnrollmentDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all class enrollments' })
  @ApiResponse({ status: 200, description: 'List of all class enrollments', type: [ClassEnrollment] })
  async findAll(): Promise<ClassEnrollment[]> {
    this.logger.log('Retrieving all class enrollments');
    return this.classEnrollmentService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a class enrollment by ID' })
  @ApiParam({ name: 'id', required: true, description: 'ID of the class enrollment' })
  @ApiResponse({ status: 200, description: 'Class enrollment found', type: ClassEnrollment })
  @ApiResponse({ status: 404, description: 'Class enrollment not found' })
  async findOne(@Param('id') id: string): Promise<ClassEnrollment> {
    this.logger.log(`Retrieving class enrollment with ID: ${id}`);
    return this.classEnrollmentService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a class enrollment by ID' })
  @ApiParam({ name: 'id', required: true, description: 'ID of the class enrollment' })
  @ApiBody({ type: CreateClassEnrollmentDto })
  @ApiResponse({ status: 200, description: 'Class enrollment updated successfully', type: ClassEnrollment })
  @ApiResponse({ status: 404, description: 'Class enrollment not found' })
  async update(
    @Param('id') id: string,
    @Body() updateClassEnrollmentDto: CreateClassEnrollmentDto,
  ): Promise<ClassEnrollment> {
    this.logger.log(`Updating class enrollment with ID: ${id}`);
    return this.classEnrollmentService.update(id, updateClassEnrollmentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a class enrollment by ID' })
  @ApiParam({ name: 'id', required: true, description: 'ID of the class enrollment' })
  @ApiResponse({ status: 200, description: 'Class enrollment deleted successfully', type: ClassEnrollment })
  @ApiResponse({ status: 404, description: 'Class enrollment not found' })
  async remove(@Param('id') id: string): Promise<ClassEnrollment> {
    this.logger.log(`Deleting class enrollment with ID: ${id}`);
    return this.classEnrollmentService.remove(id);
  }
}
