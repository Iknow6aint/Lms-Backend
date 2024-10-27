/* eslint-disable prettier/prettier */
// src/academic/dto/create-class-enrollment.dto.ts
import { IsMongoId, IsNotEmpty } from 'class-validator';

export class CreateClassEnrollmentDto {
  @IsMongoId()
  @IsNotEmpty()
  studentId: string;

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

  @IsNotEmpty()
  isApproved: boolean;

  @IsNotEmpty()
  isActive: boolean;
}
