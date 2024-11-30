import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pessoa } from 'src/pessoa/pessoa-entity';
import { Formacao } from 'src/formacao/formacao-entity';
import { Repository } from 'typeorm';

@Injectable()
export class FormacaoService {
  constructor(
    @InjectRepository(Formacao)
    private repository: Repository<Formacao>,
  ) {}

  findAll(): Promise<Formacao[]> {
    return this.repository.find();
  }

  findById(id: number): Promise<Formacao> {
    return this.repository.findOneBy({ id_formacao: id });
  }

  findByPessoa(pessoa: Pessoa): Promise<Formacao[]> {
    return this.repository.find({
      where: {
        pessoa: {
          id_pessoa: pessoa.id_pessoa,
        },
      },
    });
  }

  save(movie: Formacao): Promise<Formacao> {
    return this.repository.save(movie);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
