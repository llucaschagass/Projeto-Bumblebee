import { ApiProperty } from '@nestjs/swagger';

export class CreateGrupoDto {
  @ApiProperty({ 
    example: 'Grupo A - Econômico', 
    description: 'Nome da categoria do veículo' 
  })
  descricao: string;

  @ApiProperty({ 
    example: 90.00, 
    description: 'Valor base da diária para esta categoria' 
  })
  valorDiaria: number;
}