/* eslint-disable prettier/prettier */
// src/modules/academic/dtos/create-course-enrollment.dto.ts
import { IsMongoId, IsNotEmpty } from 'class-validator';

export class CreateCourseEnrollmentDto {
  @IsMongoId()
  @IsNotEmpty()
  studentId: string;

  @IsMongoId()
  @IsNotEmpty()
  courseId: string;

  @IsMongoId()
  @IsNotEmpty()
  classId: string;

  @IsMongoId()
  @IsNotEmpty()
  termId: string;

  @IsMongoId()
  @IsNotEmpty()
  academicYearId: string;

  @IsMongoId()
  @IsNotEmpty()
  schoolId: string;

  // Optional field to specify if the enrollment is approved
  isApproved?: boolean;
}
