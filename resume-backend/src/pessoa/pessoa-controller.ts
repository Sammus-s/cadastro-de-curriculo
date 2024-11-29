import {
  Body,Controller,Delete,Get,HttpCode,HttpException,HttpStatus,Param,ParseIntPipe,Post,Put
} from '@nestjs/common';
import { Pessoa } from 'src/pessoa/pessoa-entity';
import { PessoaService } from 'src/pessoa/pessoa-service';

@Controller('pessoas')
export class PessoaController {
  constructor(private service: PessoaService) {}

  @Get()
  findAll(): Promise<Pessoa[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number): Promise<Pessoa> {
    const found = await this.service.findById(id);

    if (!found) {
      throw new HttpException('Pessoa não encontrada', HttpStatus.NOT_FOUND);
    }

    return found;
  }

  @Post()
  create(@Body() pessoa: Pessoa): Promise<Pessoa> {
    return this.service.save(pessoa);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() pessoa: Pessoa,
  ): Promise<Pessoa> {
    const found = await this.service.findById(id);

    if (!found) {
      throw new HttpException('Pessoa não encontrada', HttpStatus.NOT_FOUND);
    }

    pessoa.id_pessoa = found.id_pessoa;

    return this.service.save(pessoa);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    const found = await this.service.findById(id);

    if (!found) {
      throw new HttpException('Pessoa não encontrada', HttpStatus.NOT_FOUND);
    }

    return this.service.remove(id);
  }
}
