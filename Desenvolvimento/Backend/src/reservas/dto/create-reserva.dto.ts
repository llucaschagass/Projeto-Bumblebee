import { ApiProperty } from '@nestjs/swagger';

export class CreateReservaDto {
  @ApiProperty({ example: '2025-12-01T10:00:00Z', description: 'Data de retirada' })
  dataInicio: Date;

  @ApiProperty({ example: '2025-12-05T10:00:00Z', description: 'Data de devolução' })
  dataFim: Date;

  @ApiProperty({ example: 1, description: 'ID do Cliente' })
  clienteId: number;

  @ApiProperty({ 
    example: 1, 
    description: 'ID do Grupo desejado',
    required: false 
  })
  grupoId?: number;

  @ApiProperty({ 
    example: 5, 
    description: 'ID de um veículo específico (Opcional, para override)', 
    required: false 
  })
  veiculoId?: number;
}