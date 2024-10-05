/* eslint-disable prettier/prettier */
// src/admin/admin.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { School, SchoolDocument } from '../school/schemas/school.schema';
import { Model } from 'mongoose';
import { Course, CourseDocument } from '../course/schemas/course.schema';
import { User, UserDocument } from '../authentication/schemas/user.schema';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(School.name) private schoolModel: Model<SchoolDocument>,
    @InjectModel(Course.name) private courseModel: Model<CourseDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async getStatistics(): Promise<any> {
    const totalSchools = await this.schoolModel.countDocuments().exec();
    const totalCourses = await this.courseModel.countDocuments().exec();
    const totalUsers = await this.userModel.countDocuments().exec();

    return {
      totalSchools,
      totalCourses,
      totalUsers,
    };
  }

  async getAllSchools(): Promise<any> {
    const schools = await this.schoolModel.find().exec();
    return schools;
  }

  // Add more statistical methods as needed
}
