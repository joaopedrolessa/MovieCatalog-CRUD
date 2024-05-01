/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { User } from './user.interfaces'; // Ajuste o caminho de importação conforme necessário
import { InjectRepository } from '@nestjs/typeorm'; // Importe o decorator InjectRepository
import { Repository } from 'typeorm'; // Importe a classe Repository do TypeORM
import { UserEntity } from './user.entity'; // Ajuste o caminho de importação conforme necessário

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) // Injete a entidade de usuário no construtor
    private readonly userRepository: Repository<UserEntity>, // Defina o repositório de usuário
  ) {}

  async findByUsernameOrId(username: string, userId: number): Promise<User | undefined> {
    // Implemente a lógica para buscar um usuário no banco de dados por username ou ID
    return this.userRepository.findOne({ where: [{ username }, { id: userId }] });
  }
}
