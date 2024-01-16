import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.useGlobalPipes(new ValidationPipe());

  app.useStaticAssets(join(__dirname, '../../src/', 'public')); //Arquivos Públicos
  app.setBaseViewsDir(join(__dirname, '../../src/', 'views')); //views
  app.setViewEngine('hbs');

  await app.listen(3000);
}
bootstrap();
