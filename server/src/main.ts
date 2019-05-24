import 'dotenv/config';
import { LoggingInterceptor } from './shared/logging.interceptor';
import { HttpExceptionFilter } from './shared/http-exception.filter';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

if (process.env.NODE_ENV === 'test') {
  console.log(`------ testing in progess at ${process.env.PORT} for ${process.env.NODE_ENV} using test db :${ process.env.MYSQL_TEST_DATABASE}`);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT);
}
bootstrap();
