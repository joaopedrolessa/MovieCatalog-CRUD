/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { FilmesService } from '../../src/filmes/filmes.database.service';
import { getRepositoryToken } from '@nestjs/typeorm'; // Importe getRepositoryToken
import { Filme } from '../../src/entities/filme.entity'; // Importe a entidade Filme

describe('FilmesService', () => {
  let service: FilmesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FilmesService,
        {
          provide: getRepositoryToken(Filme), // Use getRepositoryToken para obter o token do repositório Filme
          useValue: {}, // Aqui você pode usar um mock do repositório se necessário
        },
      ],
    }).compile();

    service = module.get<FilmesService>(FilmesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Adicione outros testes conforme necessário
});
