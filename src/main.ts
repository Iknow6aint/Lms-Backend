/* eslint-disable prettier/prettier */
// src/main.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import * as compression from 'compression';
//import * as helmet from 'helmet';
import * as hpp from 'hpp';
import * as morgan from 'morgan';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { ResponseInterceptor } from './common/interceptors/response/response.interceptor';
import { HttpExceptionFilter } from './common/filters/http-exception/http-exception.filter';
import { WinstonModule } from 'nest-winston';
import { winstonConfig } from './core/config/winston.config';

async function bootstrap() {
const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger(winstonConfig),
  });  const configService = app.get(ConfigService);
  const logger = new Logger('Bootstrap');

  // Set global prefix
  app.setGlobalPrefix('api/v1');

  // Apply middleware
  app.use(morgan(configService.get<string>('LOG_FORMAT') || 'dev'));
  //app.use(helmet());
  app.use(hpp());
  app.use(compression());
  app.useGlobalPipes(new ValidationPipe());

  //global interceptors
    app.useGlobalInterceptors(new ResponseInterceptor());
    app.useGlobalFilters(new HttpExceptionFilter());

  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('LMS API')
    .setDescription('LMS API documentation')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  const port = configService.get<string>('PORT') || 3000;
  await app.listen(port);
  logger.log(`🚀 Application is running on: http://localhost:${port}/api-docs`);
}
bootstrap();
