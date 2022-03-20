import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const options = {
    "origin": '*', 
    "methods": ['GET', 'POST', 'UPDATE', 'DEL'],
    "allowedHeaders": ['Content-type']
    // "preflightContinue": false,
    // "optionsSuccessStatus": 204
  };
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);
  const port = configService.get('PORT');
  app.enableCors(options);
  await app.listen(port);
  await console.log(`Listening on port: ${port}`);
}
bootstrap();
