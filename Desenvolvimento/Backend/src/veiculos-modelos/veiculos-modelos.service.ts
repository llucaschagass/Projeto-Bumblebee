import { Injectable } from '@nestjs/common';
import { CreateVeiculosModeloDto } from './dto/create-veiculos-modelo.dto';
import { UpdateVeiculosModeloDto } from './dto/update-veiculos-modelo.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class VeiculosModelosService {
  constructor(private prisma: PrismaService) {}

  create(createVeiculosModeloDto: CreateVeiculosModeloDto) {
    return this.prisma.veiculoModelo.create({
      data: createVeiculosModeloDto,
    });
  }

  findAll() {
    return this.prisma.veiculoModelo.findMany({
      include: { grupo: true }
    });
  }

  findOne(id: number) {
    return this.prisma.veiculoModelo.findUnique({
      where: { id },
      include: { grupo: true }
    });
  }

  update(id: number, updateVeiculosModeloDto: UpdateVeiculosModeloDto) {
    return this.prisma.veiculoModelo.update({
      where: { id },
      data: updateVeiculosModeloDto,
    });
  }

  remove(id: number) {
    return this.prisma.veiculoModelo.delete({
      where: { id },
    });
  }
}