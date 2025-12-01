import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReservasService } from './reservas.service';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Reservas')
@Controller('reservas')
export class ReservasController {
  constructor(private readonly reservasService: ReservasService) {}

  @Post()
  @ApiOperation({ summary: 'Cria uma reserva e calcula o valor total automaticamente' })
  create(@Body() createReservaDto: CreateReservaDto) {
    return this.reservasService.create(createReservaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todas as reservas' })
  findAll() {
    return this.reservasService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca reserva por ID' })
  findOne(@Param('id') id: string) {
    return this.reservasService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza uma reserva (ex: cancelar, finalizar)' })
  update(@Param('id') id: string, @Body() updateReservaDto: UpdateReservaDto) {
    return this.reservasService.update(+id, updateReservaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove uma reserva' })
  remove(@Param('id') id: string) {
    return this.reservasService.remove(+id);
  }
}