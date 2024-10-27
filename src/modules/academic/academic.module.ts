/* eslint-disable prettier/prettier */
// src/modules/academic/academic.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AcademicYear, AcademicYearSchema } from './schemas/academic-year.schema';
import { Term, TermSchema } from './schemas/term.schema';
import { ClassEnrollment, ClassEnrollmentSchema } from './schemas/class-enrollment.schema';
import { CourseEnrollment, CourseEnrollmentSchema } from './schemas/course-enrollment.schema';
import { Grade, GradeSchema } from './schemas/grade.schema';
import { TermService } from './services/term.service';
import { CourseEnrollmentService } from './services/course-enrollment.service';
import { ClassEnrollmentService } from './services/class-enrollment.service';
import { GradeService } from './services/grade.service';
import { TermController } from './controllers/term.controller';
import { CourseEnrollmentController } from './controllers/course-enrollment.controller';
import { ClassEnrollmentController } from './controllers/class-enrollment.controller';
import { GradeController } from './controllers/grade.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AcademicYear.name, schema: AcademicYearSchema },
      { name: Term.name, schema: TermSchema },
      { name: ClassEnrollment.name, schema: ClassEnrollmentSchema },
      { name: CourseEnrollment.name, schema: CourseEnrollmentSchema },
      { name: Grade.name, schema: GradeSchema },
    ]),
  ],
  controllers: [
    TermController,
    CourseEnrollmentController,
    ClassEnrollmentController,
    GradeController,
  ],
  providers: [
    TermService,
    CourseEnrollmentService,
    ClassEnrollmentService,
    GradeService,
  ],
})
export class AcademicModule {}
