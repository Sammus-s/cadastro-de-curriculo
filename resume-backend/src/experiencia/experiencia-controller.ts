import {
  Body,Controller,Delete,Get,HttpCode,HttpException,HttpStatus,Param,ParseIntPipe,ParseUUIDPipe,Post,Put,
} from '@nestjs/common';
import { ExperienciaService } from './experiencia-service';
import { Experiencia } from './experiencia-entity';

@Controller('/experiencias')
export class ExperienciaController {
  constructor(private service: ExperienciaService) {}

  @Get()
  findAll(): Promise<Experiencia[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseUUIDPipe) id: number): Promise<Experiencia> {
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException('Experiencia not found', HttpStatus.NOT_FOUND);

    return found;
  }

  @Post()
  create(@Body() experiencia: Experiencia): Promise<Experiencia> {
    return this.service.save(experiencia);
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: number,
    @Body() experiencia: Experiencia,
  ): Promise<Experiencia> {
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException('Experiencia not found', HttpStatus.NOT_FOUND);

    experiencia.id_experiencia = found.id_experiencia;

    return this.service.save(experiencia);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException('Experiencia not found', HttpStatus.NOT_FOUND);

    return this.service.remove(id);
  }
}
