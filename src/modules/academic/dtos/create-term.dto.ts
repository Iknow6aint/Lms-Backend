/* eslint-disable prettier/prettier */
// src/academic/dto/create-term.dto.ts
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTermDto {
  @IsString()
  @IsNotEmpty()
  name: string; // Name of the term

  @IsString()
  @IsNotEmpty()
  startDate: string; // Start date of the term in ISO format

  @IsString()
  @IsNotEmpty()
  endDate: string; // End date of the term in ISO format
}
