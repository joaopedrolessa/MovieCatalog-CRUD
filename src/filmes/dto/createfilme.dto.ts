/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, IsInt, MaxLength, MinLength, IsOptional } from 'class-validator';
import 'reflect-metadata';


export class CreateFilmeDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  titulo: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  descricao?: string;

  @IsNotEmpty()
  @IsInt()
  anoLancamento: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  diretor: string;
}

