import { Module } from '@nestjs/common';
import { ParentsController } from './controllers/parents.controller';

@Module({
  controllers: [ParentsController]
})
export class ParentsModule {}
