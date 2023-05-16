import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.model';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Education API')
    .setVersion('1.0')
    .build(); // Конфигурируем сборщик документации.
  const document = SwaggerModule.createDocument(app, config); // создаем апи документацию
  SwaggerModule.setup('api_docs', app, document); //включаем документацию Swagger.
  //по пути localhost:3002/api_docs
  await app.listen(3002); //устанавливаем порт
  await app.setGlobalPrefix('api'); //глобальный префикс для роутов контроллера
}
// Управление доступом на основе ролей (RBAC)
bootstrap();
