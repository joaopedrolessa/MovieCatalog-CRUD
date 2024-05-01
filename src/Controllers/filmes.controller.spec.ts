/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { FilmesController } from './filmes.controllers';
import { FilmesService } from 'src/filmes/filmes.database.service'; // Corrigido o caminho de importação

describe('FilmesController', () => {
  let controller: FilmesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilmesController],
      providers: [FilmesService],
    }).compile();

    controller = module.get<FilmesController>(FilmesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of filmes', async () => {
    const filmes = await controller.findAll();
    expect(filmes).toEqual(expect.any(Array));
  });
});
