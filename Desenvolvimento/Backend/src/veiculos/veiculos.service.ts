import { Injectable } from '@nestjs/common';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class VeiculosService {
  constructor(private prisma: PrismaService) {}

  create(createVeiculoDto: CreateVeiculoDto) {
    return this.prisma.veiculo.create({
      data: createVeiculoDto,
    });
  }

  findAll() {
    return this.prisma.veiculo.findMany({
      include: {
        modelo: {
          include: { grupo: true }
        }
      }
    });
  }

  findOne(id: number) {
    return this.prisma.veiculo.findUnique({
      where: { id },
      include: {
        modelo: {
          include: { grupo: true }
        }
      }
    });
  }

  update(id: number, updateVeiculoDto: UpdateVeiculoDto) {
    return this.prisma.veiculo.update({
      where: { id },
      data: updateVeiculoDto,
    });
  }

  remove(id: number) {
    return this.prisma.veiculo.delete({
      where: { id },
    });
  }
}