import { Pessoa } from 'src/pessoa/pessoa-entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';


@Entity('formacoes')
export class Formacao {
  @PrimaryGeneratedColumn()
  id_formacao: number;

  @Column({ length: 150 })
  nome: string;

  @Column({ type: 'text', nullable: true })
  descricao: string;

  @Column({ type: 'date' })
  dataInicio: Date;

  @Column({ type: 'date', nullable: true })
  dataFinalizacao: Date;

  @ManyToOne(() => Pessoa, (pessoa) => pessoa.formacoes, { onDelete: 'CASCADE' })
  pessoa: Pessoa;
}
