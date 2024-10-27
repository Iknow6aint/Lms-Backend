/* eslint-disable prettier/prettier */
// src/academic/services/term.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Term, TermDocument } from '../schemas/term.schema';
import { CreateTermDto } from '../dtos/create-term.dto'; // Create this DTO similarly to CreateGradeDto

@Injectable()
export class TermService {
  constructor(@InjectModel(Term.name) private termModel: Model<TermDocument>) {}

  async create(createTermDto: CreateTermDto): Promise<Term> {
    const createdTerm = new this.termModel(createTermDto);
    return createdTerm.save();
  }

  async findAll(): Promise<Term[]> {
    return this.termModel.find().exec();
  }

  async findOne(id: string): Promise<Term> {
    const term = await this.termModel.findById(id).exec();
    if (!term) {
      throw new NotFoundException(`Term with ID ${id} not found`);
    }
    return term;
  }

  async update(id: string, updateTermDto: CreateTermDto): Promise<Term> {
    const term = await this.termModel.findByIdAndUpdate(id, updateTermDto, { new: true }).exec();
    if (!term) {
      throw new NotFoundException(`Term with ID ${id} not found`);
    }
    return term;
  }

  async remove(id: string): Promise<Term> {
    const term = await this.termModel.findByIdAndDelete(id).exec();
    if (!term) {
      throw new NotFoundException(`Term with ID ${id} not found`);
    }
    return term;
  }
}
