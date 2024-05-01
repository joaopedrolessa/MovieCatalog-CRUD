/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração do Swagger
  const options = new DocumentBuilder()
    .setTitle('Nome da API')
    .setDescription('Descrição da API')
    .setVersion('1.0')
    .addBearerAuth() // Adiciona suporte para autenticação Bearer JWT
    .build();

  const document = SwaggerModule.createDocument(app, options);

  // Rota para o JSON da documentação da API
  app.use('/api/docs-json', (req, res) => {
    res.send(document);
  });

  // Inicia a aplicação
  await app.listen(3000);
}
bootstrap();

