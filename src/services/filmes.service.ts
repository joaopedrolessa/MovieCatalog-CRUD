/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Filme } from "src/interfaces/filme.interfaces";
import { FilmesService } from "src/filmes/filmes.database.service";

@Controller('filmes')
export class FilmesController {
  constructor(private readonly filmesService: FilmesService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll(): Promise<Filme[]> {
    return this.filmesService.findAll();
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() filme: Filme): Promise<Filme> {
    return this.filmesService.create(filme);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  async update(@Param('id') id: number, @Body() filme: Filme): Promise<Filme> {
    return this.filmesService.update(id, filme);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async delete(@Param('id') id: number): Promise<void> {
    return this.filmesService.delete(id);
  }
}
