import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VeiculosModelosService } from './veiculos-modelos.service';
import { CreateVeiculosModeloDto } from './dto/create-veiculos-modelo.dto';
import { UpdateVeiculosModeloDto } from './dto/update-veiculos-modelo.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Modelos')
@Controller('veiculos-modelos')
export class VeiculosModelosController {
  constructor(private readonly veiculosModelosService: VeiculosModelosService) {}

  @Post()
  @ApiOperation({ summary: 'Cadastra um novo modelo de veículo' })
  create(@Body() createVeiculosModeloDto: CreateVeiculosModeloDto) {
    return this.veiculosModelosService.create(createVeiculosModeloDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os modelos e suas categorias' })
  findAll() {
    return this.veiculosModelosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca um modelo pelo ID' })
  findOne(@Param('id') id: string) {
    return this.veiculosModelosService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza um modelo' })
  update(@Param('id') id: string, @Body() updateVeiculosModeloDto: UpdateVeiculosModeloDto) {
    return this.veiculosModelosService.update(+id, updateVeiculosModeloDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove um modelo' })
  remove(@Param('id') id: string) {
    return this.veiculosModelosService.remove(+id);
  }
}