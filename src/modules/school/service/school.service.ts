/* eslint-disable prettier/prettier */
// src/school/school.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { School, SchoolDocument } from './schemas/school.schema';
import { Model } from 'mongoose';

@Injectable()
export class SchoolService {
  constructor(@InjectModel(School.name) private schoolModel: Model<SchoolDocument>) {}

  async createSchool(createSchoolDto: any): Promise<School> {
    const createdSchool = new this.schoolModel(createSchoolDto);
    return createdSchool.save();
  }

  async getAllSchools(): Promise<School[]> {
    return this.schoolModel.find().exec();
  }

  async getSchoolById(id: string): Promise<School> {
    const school = await this.schoolModel.findById(id).exec();
    if (!school) {
      throw new NotFoundException('School not found');
    }
    return school;
  }

  // Add more methods as needed (update, delete)
}
