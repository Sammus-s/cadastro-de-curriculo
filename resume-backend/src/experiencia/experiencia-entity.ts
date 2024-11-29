import { Pessoa } from 'src/pessoa/pessoa-entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('experiencias')
export class Experiencia {
  @PrimaryGeneratedColumn()
  id_experiencia: number;

  @Column({ length: 150 })
  nomeEmpresa: string;

  @Column({ length: 100 })
  cargo: string;

  @Column({ type: 'text', nullable: true })
  descricaoAtividades: string;

  @Column({ type: 'date' })
  dataInicio: Date;

  @Column({ type: 'date', nullable: true })
  dataFinalizacao: Date;

  @ManyToOne(() => Pessoa, (pessoa) => pessoa.experiencias, { onDelete: 'CASCADE' })
  pessoa: Pessoa;
}
