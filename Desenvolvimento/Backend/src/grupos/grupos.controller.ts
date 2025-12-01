import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GruposService } from './grupos.service';
import { CreateGrupoDto } from './dto/create-grupo.dto';
import { UpdateGrupoDto } from './dto/update-grupo.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Grupos')
@Controller('grupos')
export class GruposController {
  constructor(private readonly gruposService: GruposService) {}

  @Post()
  @ApiOperation({ summary: 'Cria uma nova categoria' })
  create(@Body() createGrupoDto: CreateGrupoDto) {
    return this.gruposService.create(createGrupoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todas as categorias e seus modelos' })
  findAll() {
    return this.gruposService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca uma categoria pelo ID' })
  findOne(@Param('id') id: string) {
    return this.gruposService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza dados da categoria' })
  update(@Param('id') id: string, @Body() updateGrupoDto: UpdateGrupoDto) {
    return this.gruposService.update(+id, updateGrupoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove uma categoria' })
  remove(@Param('id') id: string) {
    return this.gruposService.remove(+id);
  }
}