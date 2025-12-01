import { ApiProperty } from '@nestjs/swagger';

export class CreateClienteDto {
  @ApiProperty({ example: 'João da Silva', description: 'Nome completo do cliente' })
  nome: string;

  @ApiProperty({ example: 'joao@email.com', description: 'E-mail para contato' })
  email: string;

  @ApiProperty({ example: '123.456.789-00', description: 'CPF ou CNPJ' })
  cpfCnpj: string;

  @ApiProperty({ example: '(11) 99999-9999', description: 'Telefone de contato', required: false })
  telefone?: string;
}