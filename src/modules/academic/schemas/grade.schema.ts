/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type GradeDocument = Grade & Document;

@Schema({ timestamps: true })
export class Grade {
  @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'Student' })
  studentId: MongooseSchema.Types.ObjectId;

  @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'Course' })
  courseId: MongooseSchema.Types.ObjectId;

  @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'Class' })
  classId: MongooseSchema.Types.ObjectId;

  @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'Term' })
  termId: MongooseSchema.Types.ObjectId;

  @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'AcademicYear' })
  academicYearId: MongooseSchema.Types.ObjectId;

  @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'School' })
  schoolId: MongooseSchema.Types.ObjectId;

  @Prop({ required: true, min: 0, max: 10 })
  firstTest: number;

  @Prop({ required: true, min: 0, max: 10 })
  secondTest: number;

  @Prop({ required: true, min: 0, max: 10 })
  thirdTest: number;

  @Prop({ required: true, min: 0, max: 70 })
  exam: number;

  @Prop({ 
    type: Number,
    min: 0,
    max: 100,
    default: function() {
      return this.firstTest + this.secondTest + this.thirdTest + this.exam;
    }
  })
  total: number;

  @Prop({ type: String })
  remarks: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  gradedBy: MongooseSchema.Types.ObjectId;
}

export const GradeSchema = SchemaFactory.createForClass(Grade);

// Add indexes for better query performance
GradeSchema.index({ 
  schoolId: 1, 
  studentId: 1, 
  academicYearId: 1, 
  termId: 1 
});
