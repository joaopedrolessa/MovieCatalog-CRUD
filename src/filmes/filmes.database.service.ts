/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Filme } from '../entities/filme.entity'; // Ajuste o caminho de importação conforme necessário
import { CreateFilmeDto } from './dto/createfilme.dto';

@Injectable()
export class FilmesService {
  constructor(
    @InjectRepository(Filme)
    private readonly filmeRepository: Repository<Filme>,
  ) {}

  async findAll(): Promise<Filme[]> {
    return await this.filmeRepository.find();
  }

  async findById(id: number): Promise<Filme> {
    const filme = await this.filmeRepository.findOne({ where: { id } });
    if (!filme) {
      throw new NotFoundException('Filme não encontrado');
    }
    return filme;
  }

  async create(createFilmeDto: CreateFilmeDto): Promise<Filme> {
    const novoFilme = this.filmeRepository.create(createFilmeDto);
    return await this.filmeRepository.save(novoFilme);
  }

  async update(id: number, updateFilmeDto: CreateFilmeDto): Promise<Filme> {
    const filme = await this.findById(id);
    Object.assign(filme, updateFilmeDto);
    return await this.filmeRepository.save(filme);
  }

  async delete(id: number): Promise<void> {
    const filme = await this.findById(id);
    await this.filmeRepository.remove(filme);
  }
}
