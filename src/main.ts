import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.model';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// import { JwtAuthGuard } from './auth/local-auth.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalGuards(new JwtAuthGuard());
  const config = new DocumentBuilder()
    .setTitle('Education API')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'Bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT Token',
        in: 'header',
      },
      'JWT-auth',
    )
    .build(); // Конфигурируем сборщик документации.
  const document = SwaggerModule.createDocument(app, config); // создаем апи документацию
  SwaggerModule.setup('api_docs', app, document); //включаем документацию Swagger.
  //по пути localhost:3002/api_docs
  await app.listen(3002); //устанавливаем порт
  await app.setGlobalPrefix('api'); //глобальный префикс для роутов контроллера
}
bootstrap();
