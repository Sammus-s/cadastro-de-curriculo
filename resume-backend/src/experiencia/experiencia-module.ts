import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Experiencia } from './experiencia-entity';
import { ExperienciaService } from './experiencia-service';
import { ExperienciaController } from './experiencia-controller';
import { Pessoa } from 'src/pessoa/pessoa-entity';

@Module({
  imports: [TypeOrmModule.forFeature([Experiencia, Pessoa])],
  providers: [ExperienciaService],
  controllers: [ExperienciaController],
})
export class ExperienciaModule {}
