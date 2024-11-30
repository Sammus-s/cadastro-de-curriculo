import { Module } from '@nestjs/common';
import { PessoaService } from './pessoa-service';
import { PessoaController } from './pessoa-controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pessoa } from './pessoa-entity';
import { Formacao } from 'src/formacao/formacao-entity';
import { Experiencia } from 'src/experiencia/experiencia-entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pessoa, Formacao, Experiencia])],
  providers: [PessoaService],
  controllers: [PessoaController],
})
export class PessoaModule {}
