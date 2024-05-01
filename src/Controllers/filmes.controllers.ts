/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Filme } from "src/interfaces/filme.interfaces";
import { FilmesService } from "src/filmes/filmes.database.service";
import { ApiBearerAuth, ApiTags, ApiResponse } from '@nestjs/swagger'; // Importe as anotações do Swagger

@Controller('filmes')
@ApiTags('Filmes') // Adicione uma tag Swagger para agrupar os endpoints
export class FilmesController {
  constructor(private readonly filmesService: FilmesService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth() // Adicione a anotação para indicar que o endpoint requer autenticação JWT
  @ApiResponse({ status: 200, description: 'Lista todos os filmes' }) // Adicione uma resposta de sucesso
  async findAll(): Promise<Filme[]> {
    return this.filmesService.findAll();
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiResponse({ status: 201, description: 'Filme criado com sucesso' }) // Adicione uma resposta de sucesso
  async create(@Body() filme: Filme): Promise<Filme> {
    return this.filmesService.create(filme);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiResponse({ status: 200, description: 'Filme atualizado com sucesso' }) // Adicione uma resposta de sucesso
  @ApiResponse({ status: 404, description: 'Filme não encontrado' }) // Adicione uma resposta de erro
  async update(@Param('id') id: number, @Body() filme: Filme): Promise<Filme> {
    return this.filmesService.update(id, filme);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiResponse({ status: 200, description: 'Filme removido com sucesso' }) // Adicione uma resposta de sucesso
  @ApiResponse({ status: 404, description: 'Filme não encontrado' }) // Adicione uma resposta de erro
  async delete(@Param('id') id: number): Promise<void> {
    return this.filmesService.delete(id);
  }
}
