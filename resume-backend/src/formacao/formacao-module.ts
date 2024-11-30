import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Formacao } from './formacao-entity';
import { FormacaoService } from './formacao-service';
import { FormacaoController } from './formacao-controller';
import { Pessoa } from 'src/pessoa/pessoa-entity';
import { SupabaseModule } from 'src/@libs/supabase/supabase.module';

@Module({
  imports: [TypeOrmModule.forFeature([Formacao,Pessoa]), ],
  providers: [FormacaoService],
  controllers: [FormacaoController],
})
export class FormacaoModule {}
