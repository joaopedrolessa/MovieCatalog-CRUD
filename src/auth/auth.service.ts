/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../users/user.service'; // Ajuste o caminho de importação conforme necessário

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService, // Injete o serviço de usuário
  ) {}

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(payload: any) {
    const { username, sub: userId } = payload;

    // Busque o usuário no banco de dados com base no username ou ID fornecido no payload
    const user = await this.userService.findByUsernameOrId(username, userId);

    // Verifique se o usuário existe
    if (!user) {
      throw new UnauthorizedException('Usuário não encontrado');
    }

    // Se tudo estiver correto, retorne o usuário
    return user;
  }
}
