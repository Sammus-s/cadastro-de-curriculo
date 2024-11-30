import { Experiencia } from 'src/experiencia/experiencia-entity';
import { Formacao } from 'src/formacao/formacao-entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('pessoas')
export class Pessoa {
  @PrimaryGeneratedColumn()
  id_pessoa: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ unique: true, length: 150 })
  email: string;

  @Column({ type: 'date', nullable: true })
  dataNascimento: Date;

  @Column({ length: 23, nullable: true })
  telefone: string;

  @OneToMany(() => Formacao, (formacao) => formacao.pessoa, { cascade: true , eager: true})
  formacoes: Formacao[];

  @OneToMany(() => Experiencia, (experiencia) => experiencia.pessoa, { cascade: true , eager: true})
  experiencias: Experiencia[];
}
