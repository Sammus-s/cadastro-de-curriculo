import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { SupabaseService } from 'src/@libs/supabase/supabase.service';
import { Pessoa } from 'src/pessoa/pessoa-entity';
import { Formacao } from 'src/formacao/formacao-entity';
import { FormacaoService } from 'src/formacao/formacao-service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('formacoes')
export class FormacaoController {
  constructor(
    private readonly service: FormacaoService,
  ) {}

  @Get()
  findAll(@Query('formacaoId') formacaoId?: number): Promise<Formacao[]> {
    if (formacaoId) {
      return this.service.findByPessoa({
        id_pessoa: formacaoId,
      } as Pessoa);
    }
    return this.service.findAll();
  }

  @Get(':id')
  async findById(@Param('id', new ParseUUIDPipe()) id: number): Promise<Formacao> {
    const found = await this.service.findById(id);

    if (!found) {
      throw new HttpException('Formacao not found', HttpStatus.NOT_FOUND);
    }

    return found;
  }

  @Post()
  create(@Body() formacoe: Formacao): Promise<Formacao> {
    return this.service.save(formacoe);
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: number,
    @Body() formacoe: Formacao,
  ): Promise<Formacao> {
    const found = await this.service.findById(id);

    if (!found) {
      throw new HttpException('Formacao not found', HttpStatus.NOT_FOUND);
    }

    formacoe.id_formacao = found.id_formacao;

    return this.service.save(formacoe);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id', ParseUUIDPipe) id: number): Promise<void> {
    const found = await this.service.findById(id);

    if (!found) {
      throw new HttpException('Formacao not found', HttpStatus.NOT_FOUND);
    }

    return this.service.remove(id);
  }
}

