import { ApiProperty } from '@nestjs/swagger';

export class CreateVeiculoDto {
  @ApiProperty({ example: 'ABC-1234', description: 'Placa única do veículo' })
  placa: string;

  @ApiProperty({ example: '9BW123456...', description: 'Número do Chassi' })
  chassi: string;

  @ApiProperty({ example: '12345678900', description: 'Renavam' })
  renavam: string;

  @ApiProperty({ example: '2024/2025', description: 'Ano Fabricação/Modelo' })
  fabricacaoModelo: string;

  @ApiProperty({ example: 'Branco', description: 'Cor do veículo' })
  cor: string;

  @ApiProperty({ example: 15000, description: 'Quilometragem atual' })
  km: number;

  @ApiProperty({ example: 1, description: 'ID do Modelo (Ex: ID do HB20)' })
  modeloId: number;
}