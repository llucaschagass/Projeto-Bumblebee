import { Module } from '@nestjs/common';
import { VeiculosModelosService } from './veiculos-modelos.service';
import { VeiculosModelosController } from './veiculos-modelos.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [VeiculosModelosController],
  providers: [VeiculosModelosService, PrismaService],
})
export class VeiculosModelosModule {}