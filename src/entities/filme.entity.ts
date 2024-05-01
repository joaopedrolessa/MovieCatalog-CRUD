/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Filme {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  titulo: string;

  @Column({ length: 255, nullable: true })
  descricao: string;

  @Column()
  anoLancamento: number;

  @Column({ length: 100 })
  diretor: string;
}
