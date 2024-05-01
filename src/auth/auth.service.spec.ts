/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt'; // Importe o JwtModule

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
      imports: [
        JwtModule.register({
          // Aqui você pode configurar o JwtModule conforme necessário
          secret: 'your-secret-key', // Defina sua chave secreta aqui
          signOptions: { expiresIn: '1h' }, // Defina as opções de assinatura conforme necessário
        }),
      ],
    }).compile();

    service = module.get(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
