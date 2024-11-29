import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './pessoa/pessoa-module';
import { MovieModule } from './formacao/formacao-module';
import { GenreModule } from './experiencia/experiencia-module';

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
    CategoryModule,
    GenreModule,
    MovieModule,
  ],
})
export class AppModule {}
