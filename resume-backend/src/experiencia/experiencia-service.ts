import { Repository } from 'typeorm';
import { Experiencia } from './experiencia-entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ExperienciaService {
  constructor(
    @InjectRepository(Experiencia)
    private repository: Repository<Experiencia>,
  ) {}

  findAll(): Promise<Experiencia[]> {
    return this.repository.find();
  }

  findById(id: number): Promise<Experiencia> {
    return this.repository.findOneBy({ id_experiencia: id });
  }

  save(genre: Experiencia): Promise<Experiencia> {
    return this.repository.save(genre);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
