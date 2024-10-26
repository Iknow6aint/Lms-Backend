/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type TermDocument = Term & Document;

@Schema({ timestamps: true })
export class Term {
  @Prop({ required: true })
  name: string; // e.g., "First Term", "Second Term", "Third Term"

  @Prop({ required: true })
  startDate: Date;

  @Prop({ required: true })
  endDate: Date;

  @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'AcademicYear' })
  academicYearId: MongooseSchema.Types.ObjectId;

  @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'School' })
  schoolId: MongooseSchema.Types.ObjectId;

  @Prop({ default: false })
  isCurrent: boolean;
}

export const TermSchema = SchemaFactory.createForClass(Term);
