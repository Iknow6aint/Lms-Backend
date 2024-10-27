/* eslint-disable prettier/prettier */
// src/academic/services/grade.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateGradeDto } from '../dtos/create-grade.dto';
import { Grade, GradeDocument } from '../schemas/grade.schema';

@Injectable()
export class GradeService {
  constructor(@InjectModel(Grade.name) private gradeModel: Model<GradeDocument>) {}

  async create(createGradeDto: CreateGradeDto): Promise<Grade> {
    const createdGrade = new this.gradeModel(createGradeDto);
    return createdGrade.save();
  }

  async findAll(): Promise<Grade[]> {
    return this.gradeModel.find().exec();
  }

  async findOne(id: string): Promise<Grade> {
    const grade = await this.gradeModel.findById(id).exec();
    if (!grade) {
      throw new NotFoundException(`Grade with ID ${id} not found`);
    }
    return grade;
  }

  async update(id: string, updateGradeDto: CreateGradeDto): Promise<Grade> {
    const grade = await this.gradeModel.findByIdAndUpdate(id, updateGradeDto, { new: true }).exec();
    if (!grade) {
      throw new NotFoundException(`Grade with ID ${id} not found`);
    }
    return grade;
  }

  async remove(id: string): Promise<Grade> {
    const grade = await this.gradeModel.findByIdAndDelete(id).exec();
    if (!grade) {
      throw new NotFoundException(`Grade with ID ${id} not found`);
    }
    return grade;
  }
}
