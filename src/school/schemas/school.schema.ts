/* eslint-disable prettier/prettier */
// src/school/schemas/school.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SchoolDocument = School & Document;

@Schema({ timestamps: true })
export class School {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  language: string; // e.g., English, French, Portuguese

  @Prop({ required: true })
  country: string; // Specific to West Africa
}

export const SchoolSchema = SchemaFactory.createForClass(School);
