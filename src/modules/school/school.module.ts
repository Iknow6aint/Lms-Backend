/* eslint-disable prettier/prettier */
// src/school/school.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SchoolService } from './school.service';
import { SchoolController } from './school.controller';
import { School, SchoolSchema } from './schemas/school.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: School.name, schema: SchoolSchema }])],
  controllers: [SchoolController],
  providers: [SchoolService],
  exports: [MongooseModule], // Export SchoolModel so it can be used in other modules
})
export class SchoolModule {}
