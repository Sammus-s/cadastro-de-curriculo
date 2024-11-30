import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PessoaModule } from './pessoa/pessoa-module';
import { FormacaoModule } from './formacao/formacao-module';
import { ExperienciaModule } from './experiencia/experiencia-module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      synchronize: true,
      autoLoadEntities: true,
    }),
    PessoaModule,
    ExperienciaModule,
    FormacaoModule,
  ],
})
export class AppModule {}
