/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {  Schema as MongooseSchema } from 'mongoose';

@Schema({ timestamps: true })
export class Subject {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  code: string; // e.g., 'MTH' for Mathematics

  @Prop({ required: true })
  description: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'School', required: true })
  schoolId: MongooseSchema.Types.ObjectId;
}

export const SubjectSchema = SchemaFactory.createForClass(Subject);