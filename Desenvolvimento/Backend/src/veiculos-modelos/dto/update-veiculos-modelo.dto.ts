import { PartialType } from '@nestjs/swagger';
import { CreateVeiculosModeloDto } from './create-veiculos-modelo.dto';

export class UpdateVeiculosModeloDto extends PartialType(CreateVeiculosModeloDto) {}