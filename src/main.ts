import cluster from "node:cluster"
import path from "node:path"
import { HttpStatus, 
  Logger,
  UnprocessableEntityException, 
  ValidationPipe 
} from '@nestjs/common';
import { ConfigService } from "@nestjs/config";
import { NestFactory } from '@nestjs/core';

import { NestFastifyApplication } from "@nestjs/platform-fastify"
import { useContainer } from "class-validator"

import { AppModule } from './app.module';

declare  const module: any

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
