// src/admin/admin.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { SchoolModule } from '../school/school.module'; // Import SchoolModule
import { Course, CourseSchema } from '../course/schemas/course.schema';
import { User, UserSchema } from '../authentication/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Course.name, schema: CourseSchema },
      { name: User.name, schema: UserSchema },
    ]),
    SchoolModule, // Import SchoolModule to provide SchoolModel to AdminService
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
