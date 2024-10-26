/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { SchoolModule } from './modules/school/school.module';
import { CourseModule } from './modules/course/course.module';
import { AdminModule } from './modules/admin/admin.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { StudentsModule } from './modules/students/students.module';
import { ChatModule } from './modules/chat/chat.module';
import { ParentsModule } from './modules/parents/parents.module';
import { SubjectModule } from './modules/subject/subject.module';

@Module({
imports: [
    // Load environment variables
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // Connect to MongoDB
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI') || 'mongodb://localhost/lms',
      }),
      inject: [ConfigService],
    }),
    // Import all modules
    AuthenticationModule,
    SchoolModule,
    CourseModule,
    AdminModule,
    StudentsModule,
    ChatModule,
    ParentsModule,
    SubjectModule,
  ],    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
