/* eslint-disable prettier/prettier */
// src/modules/academic/controllers/term.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  HttpCode,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { TermService } from '../services/term.service';
import { CreateTermDto } from '../dtos/create-term.dto';
import { Term } from '../schemas/term.schema';

@ApiTags('Terms')
@Controller('terms')
export class TermController {
  private readonly logger = new Logger(TermController.name);

  constructor(private readonly termService: TermService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new term' })
  @ApiResponse({ status: 201, description: 'Term created successfully.', type: Term })
  @ApiBody({ type: CreateTermDto })
  async create(@Body() createTermDto: CreateTermDto): Promise<Term> {
    this.logger.log('Creating a new term');
    return this.termService.create(createTermDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all terms' })
  @ApiResponse({ status: 200, description: 'List of all terms', type: [Term] })
  async findAll(): Promise<Term[]> {
    this.logger.log('Retrieving all terms');
    return this.termService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a term by ID' })
  @ApiParam({ name: 'id', required: true, description: 'ID of the term' })
  @ApiResponse({ status: 200, description: 'Term found', type: Term })
  @ApiResponse({ status: 404, description: 'Term not found' })
  async findOne(@Param('id') id: string): Promise<Term> {
    this.logger.log(`Retrieving term with ID: ${id}`);
    return this.termService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a term by ID' })
  @ApiParam({ name: 'id', required: true, description: 'ID of the term' })
  @ApiBody({ type: CreateTermDto })
  @ApiResponse({ status: 200, description: 'Term updated successfully', type: Term })
  @ApiResponse({ status: 404, description: 'Term not found' })
  async update(@Param('id') id: string, @Body() updateTermDto: CreateTermDto): Promise<Term> {
    this.logger.log(`Updating term with ID: ${id}`);
    return this.termService.update(id, updateTermDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a term by ID' })
  @ApiParam({ name: 'id', required: true, description: 'ID of the term' })
  @ApiResponse({ status: 200, description: 'Term deleted successfully', type: Term })
  @ApiResponse({ status: 404, description: 'Term not found' })
  async remove(@Param('id') id: string): Promise<Term> {
    this.logger.log(`Deleting term with ID: ${id}`);
    return this.termService.remove(id);
  }
}
