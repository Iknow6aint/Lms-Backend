/* eslint-disable prettier/prettier */
// src/academic/dto/create-grade.dto.ts
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateGradeDto {
  @IsString()
  @IsNotEmpty()
  subject: string;

  @IsNumber()
  @IsNotEmpty()
  grade: number;

  @IsString()
  @IsNotEmpty()
  studentId: string; // Reference to the student
}
