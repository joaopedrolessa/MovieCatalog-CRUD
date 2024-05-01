/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Filme } from './entities/filme.entity'; // Importe a entidade Filme
import { ConfigModule } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'; // Importe o SwaggerModule e o DocumentBuilder
import { NestFactory } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres', // Tipo do banco de dados (postgres, mysql, etc.)
      host: 'localhost', // Endereço do banco de dados
      port: 5432, // Porta do banco de dados
      username: 'postgres', // Usuário do banco de dados
      password: '234283758045J@ypi', // Senha do banco de dados
      database: 'catalogofilme', // Nome do banco de dados
      entities: [Filme], // Lista de entidades a serem carregadas
      synchronize: true, // Sincroniza as entidades com o banco de dados (apenas para ambiente de desenvolvimento)
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static async initializeApp() {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
      .setTitle('Api')
      .setDescription('Uma api')
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }
}