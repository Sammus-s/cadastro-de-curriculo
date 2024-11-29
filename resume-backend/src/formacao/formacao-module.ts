import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './formacao-entity';
import { MovieService } from './formacao-service';
import { MovieController } from './formacao-controller';
import { Category } from 'src/pessoa/pessoa-entity';
import { Genre } from 'src/experiencia/experiencia-entity';
import { SupabaseModule } from 'src/@libs/supabase/supabase.module';

@Module({
  imports: [TypeOrmModule.forFeature([Category, Genre, Movie]), SupabaseModule],
  providers: [MovieService],
  controllers: [MovieController],
})
export class MovieModule {}
