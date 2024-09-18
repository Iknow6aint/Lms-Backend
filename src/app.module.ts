/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { SchoolModule } from './school/school.module';
import { CourseModule } from './course/course.module';
import { AdminModule } from './admin/admin.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

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
  ],    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
