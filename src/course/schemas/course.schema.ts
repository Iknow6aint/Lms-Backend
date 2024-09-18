/* eslint-disable prettier/prettier */
// src/course/schemas/course.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CourseDocument = Course & Document;

@Schema({ timestamps: true })
export class Course {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  schoolId: string; // Reference to School

  @Prop({ required: true })
  subject: string;

  @Prop({ required: true })
  gradeLevel: string; // e.g., Grade 10, Grade 12
}

export const CourseSchema = SchemaFactory.createForClass(Course);
