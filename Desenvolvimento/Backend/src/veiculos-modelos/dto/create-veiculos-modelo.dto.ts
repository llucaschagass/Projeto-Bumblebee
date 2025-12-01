import { ApiProperty } from '@nestjs/swagger';

export class CreateVeiculosModeloDto {
  @ApiProperty({ 
    example: 'Hyundai HB20 1.0 Sense', 
    description: 'Descrição completa do modelo' 
  })
  descricao: string;

  @ApiProperty({ 
    example: 'Hyundai', 
    description: 'Fabricante do veículo' 
  })
  marca: string;

  @ApiProperty({ 
    example: 1, 
    description: 'ID do Grupo (Categoria) que este modelo pertence' 
  })
  grupoId: number;
}