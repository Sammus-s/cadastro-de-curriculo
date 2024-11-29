import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pessoa } from 'src/pessoa/pessoa-entity';
import { Repository } from 'typeorm';

@Injectable()
export class PessoaService {
  constructor(
    @InjectRepository(Pessoa)
    private repository: Repository<Pessoa>,
  ) {}

  findAll(): Promise<Pessoa[]> {
    return this.repository.find();
  }

  findById(id: number): Promise<Pessoa> {
    return this.repository.findOneBy({ id_pessoa: id });
  }

  save(pessoa: Pessoa): Promise<Pessoa> {
    return this.repository.save(pessoa);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
