/* eslint-disable prettier/prettier */
// src/academic/services/course-enrollment.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CourseEnrollment, CourseEnrollmentDocument } from '../schemas/course-enrollment.schema';
import { CreateCourseEnrollmentDto } from '../dtos/create-course-enrollment.dto'; // Create this DTO similarly to CreateGradeDto

@Injectable()
export class CourseEnrollmentService {
  constructor(@InjectModel(CourseEnrollment.name) private courseEnrollmentModel: Model<CourseEnrollmentDocument>) {}

  async create(createCourseEnrollmentDto: CreateCourseEnrollmentDto): Promise<CourseEnrollment> {
    const createdEnrollment = new this.courseEnrollmentModel(createCourseEnrollmentDto);
    return createdEnrollment.save();
  }

  async findAll(): Promise<CourseEnrollment[]> {
    return this.courseEnrollmentModel.find().exec();
  }

  async findOne(id: string): Promise<CourseEnrollment> {
    const enrollment = await this.courseEnrollmentModel.findById(id).exec();
    if (!enrollment) {
      throw new NotFoundException(`Enrollment with ID ${id} not found`);
    }
    return enrollment;
  }

  async update(id: string, updateCourseEnrollmentDto: CreateCourseEnrollmentDto): Promise<CourseEnrollment> {
    const enrollment = await this.courseEnrollmentModel.findByIdAndUpdate(id, updateCourseEnrollmentDto, { new: true }).exec();
    if (!enrollment) {
      throw new NotFoundException(`Enrollment with ID ${id} not found`);
    }
    return enrollment;
  }

  async remove(id: string): Promise<CourseEnrollment> {
    const enrollment = await this.courseEnrollmentModel.findByIdAndDelete(id).exec();
    if (!enrollment) {
      throw new NotFoundException(`Enrollment with ID ${id} not found`);
    }
    return enrollment;
  }
}
