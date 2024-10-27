/* eslint-disable prettier/prettier */
// src/academic/services/class-enrollment.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ClassEnrollment, ClassEnrollmentDocument } from '../schemas/class-enrollment.schema';
import { CreateClassEnrollmentDto } from '../dtos/create-class-enrollment.dto'; // Create this DTO similarly to CreateGradeDto

@Injectable()
export class ClassEnrollmentService {
  constructor(@InjectModel(ClassEnrollment.name) private classEnrollmentModel: Model<ClassEnrollmentDocument>) {}

  async create(createClassEnrollmentDto: CreateClassEnrollmentDto): Promise<ClassEnrollment> {
    const createdEnrollment = new this.classEnrollmentModel(createClassEnrollmentDto);
    return createdEnrollment.save();
  }

  async findAll(): Promise<ClassEnrollment[]> {
    return this.classEnrollmentModel.find().exec();
  }

  async findOne(id: string): Promise<ClassEnrollment> {
    const enrollment = await this.classEnrollmentModel.findById(id).exec();
    if (!enrollment) {
      throw new NotFoundException(`Enrollment with ID ${id} not found`);
    }
    return enrollment;
  }

  async update(id: string, updateClassEnrollmentDto: CreateClassEnrollmentDto): Promise<ClassEnrollment> {
    const enrollment = await this.classEnrollmentModel.findByIdAndUpdate(id, updateClassEnrollmentDto, { new: true }).exec();
    if (!enrollment) {
      throw new NotFoundException(`Enrollment with ID ${id} not found`);
    }
    return enrollment;
  }

  async remove(id: string): Promise<ClassEnrollment> {
    const enrollment = await this.classEnrollmentModel.findByIdAndDelete(id).exec();
    if (!enrollment) {
      throw new NotFoundException(`Enrollment with ID ${id} not found`);
    }
    return enrollment;
  }
}
