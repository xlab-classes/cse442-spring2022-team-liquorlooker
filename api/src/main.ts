import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';
async function bootstrap() {
  const options = {
    origin: '*',
    methods: ['GET', 'POST', 'UPDATE', 'DELETE'],
    allowedHeaders: ['Content-type'],
    // "preflightContinue": false,
    // "optionsSuccessStatus": 204
  };
  const httpsOptions = {
    key: fs.readFileSync('./secrets/private-key.pem'),
    cert: fs.readFileSync('./secrets/public-certificate.pem'),
  };
  const app = await NestFactory.create(AppModule, { httpsOptions });
  const configService = app.get<ConfigService>(ConfigService);
  const port = configService.get('PORT');
  app.enableCors(options);
  await app.listen(port);
  await console.log(`Listening on port: ${port}`);
}
bootstrap();
