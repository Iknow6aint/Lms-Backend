/* eslint-disable prettier/prettier */
// src/modules/academic/controllers/course-enrollment.controller.ts
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
import { CourseEnrollmentService } from '../services/course-enrollment.service';
import { CreateCourseEnrollmentDto } from '../dtos/create-course-enrollment.dto';
import { CourseEnrollment } from '../schemas/course-enrollment.schema';

@ApiTags('Course Enrollments')
@Controller('course-enrollments')
export class CourseEnrollmentController {
  private readonly logger = new Logger(CourseEnrollmentController.name);

  constructor(private readonly courseEnrollmentService: CourseEnrollmentService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Enroll a student in a course' })
  @ApiResponse({ status: 201, description: 'Student enrolled in course successfully.', type: CourseEnrollment })
  @ApiBody({ type: CreateCourseEnrollmentDto })
  async create(@Body() createCourseEnrollmentDto: CreateCourseEnrollmentDto): Promise<CourseEnrollment> {
    this.logger.log('Creating a new course enrollment');
    return this.courseEnrollmentService.create(createCourseEnrollmentDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all course enrollments' })
  @ApiResponse({ status: 200, description: 'List of all course enrollments', type: [CourseEnrollment] })
  async findAll(): Promise<CourseEnrollment[]> {
    this.logger.log('Retrieving all course enrollments');
    return this.courseEnrollmentService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a course enrollment by ID' })
  @ApiParam({ name: 'id', required: true, description: 'ID of the course enrollment' })
  @ApiResponse({ status: 200, description: 'Course enrollment found', type: CourseEnrollment })
  @ApiResponse({ status: 404, description: 'Course enrollment not found' })
  async findOne(@Param('id') id: string): Promise<CourseEnrollment> {
    this.logger.log(`Retrieving course enrollment with ID: ${id}`);
    return this.courseEnrollmentService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a course enrollment by ID' })
  @ApiParam({ name: 'id', required: true, description: 'ID of the course enrollment' })
  @ApiBody({ type: CreateCourseEnrollmentDto })
  @ApiResponse({ status: 200, description: 'Course enrollment updated successfully', type: CourseEnrollment })
  @ApiResponse({ status: 404, description: 'Course enrollment not found' })
  async update(
    @Param('id') id: string,
    @Body() updateCourseEnrollmentDto: CreateCourseEnrollmentDto,
  ): Promise<CourseEnrollment> {
    this.logger.log(`Updating course enrollment with ID: ${id}`);
    return this.courseEnrollmentService.update(id, updateCourseEnrollmentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a course enrollment by ID' })
  @ApiParam({ name: 'id', required: true, description: 'ID of the course enrollment' })
  @ApiResponse({ status: 200, description: 'Course enrollment deleted successfully', type: CourseEnrollment })
  @ApiResponse({ status: 404, description: 'Course enrollment not found' })
  async remove(@Param('id') id: string): Promise<CourseEnrollment> {
    this.logger.log(`Deleting course enrollment with ID: ${id}`);
    return this.courseEnrollmentService.remove(id);
  }
}
