/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { SchoolModule } from './school/school.module';
import { CourseModule } from './course/course.module';
import { AdminModule } from './admin/admin.module';

@Module({
    imports: [AuthenticationModule, SchoolModule, CourseModule, AdminModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
