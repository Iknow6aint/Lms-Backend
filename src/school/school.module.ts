/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SchoolController } from './school.controller';
import { SchoolService } from './school.service';
import { School, SchoolSchema } from './schemas/school.schema';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';

@Module({
      imports: [MongooseModule.forFeature([{ name: School.name, schema: SchoolSchema }])],

  controllers: [SchoolController],
  providers: [SchoolService],
})
export class SchoolModule {}
