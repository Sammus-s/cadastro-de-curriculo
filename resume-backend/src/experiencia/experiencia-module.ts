import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Genre } from './experiencia-entity';
import { GenreService } from './experiencia-service';
import { GenreController } from './experiencia-controller';

@Module({
  imports: [TypeOrmModule.forFeature([Genre])],
  providers: [GenreService],
  controllers: [GenreController],
})
export class GenreModule {}
