import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VeiculosService } from './veiculos.service';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Veículos')
@Controller('veiculos')
export class VeiculosController {
  constructor(private readonly veiculosService: VeiculosService) {}

  @Post()
  @ApiOperation({ summary: 'Adiciona um carro novo na frota' })
  create(@Body() createVeiculoDto: CreateVeiculoDto) {
    return this.veiculosService.create(createVeiculoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista toda a frota com detalhes completos' })
  findAll() {
    return this.veiculosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca carro por ID' })
  findOne(@Param('id') id: string) {
    return this.veiculosService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza dados (ex: km após devolução)' })
  update(@Param('id') id: string, @Body() updateVeiculoDto: UpdateVeiculoDto) {
    return this.veiculosService.update(+id, updateVeiculoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove um carro do sistema' })
  remove(@Param('id') id: string) {
    return this.veiculosService.remove(+id);
  }
}