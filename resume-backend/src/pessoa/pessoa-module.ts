import { Module } from '@nestjs/common';
import { CategoryService } from './pessoa-service';
import { CategoryController } from './pessoa-controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './pessoa-entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  providers: [CategoryService],
  controllers: [CategoryController],
})
export class CategoryModule {}
