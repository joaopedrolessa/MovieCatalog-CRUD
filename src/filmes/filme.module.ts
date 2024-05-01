/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmesService } from './filmes.database.service'; // Importe o serviço FilmesService
import { Filme } from 'src/entities/filme.entity'; // Importe a entidade Filme

@Module({
  imports: [TypeOrmModule.forFeature([Filme])], // Importe a entidade Filme para uso no módulo
  providers: [FilmesService], // Forneça o serviço FilmesService
  exports: [FilmesService], // Exporte o serviço se necessário
})
export class FilmesModule {}
