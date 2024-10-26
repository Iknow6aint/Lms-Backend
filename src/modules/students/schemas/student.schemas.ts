/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {  Schema as MongooseSchema } from 'mongoose';

@Schema({ timestamps: true })
export class Student {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true, unique: true })
  userId: MongooseSchema.Types.ObjectId;

  @Prop({ required: true })
  gradeLevel: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'School', required: true })
  schoolId: MongooseSchema.Types.ObjectId;

  @Prop([{ type: MongooseSchema.Types.ObjectId, ref: 'Course' }])
  enrolledCourses: MongooseSchema.Types.ObjectId[];
}

export const StudentSchema = SchemaFactory.createForClass(Student);