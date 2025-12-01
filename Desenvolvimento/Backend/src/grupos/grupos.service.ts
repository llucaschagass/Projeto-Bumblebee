import { Injectable } from '@nestjs/common';
import { CreateGrupoDto } from './dto/create-grupo.dto';
import { UpdateGrupoDto } from './dto/update-grupo.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class GruposService {
  constructor(private prisma: PrismaService) {}

  create(createGrupoDto: CreateGrupoDto) {
    return this.prisma.grupo.create({
      data: createGrupoDto,
    });
  }

  findAll() {
    return this.prisma.grupo.findMany({
      include: { modelos: true }
    });
  }

  findOne(id: number) {
    return this.prisma.grupo.findUnique({
      where: { id },
      include: { modelos: true }
    });
  }

  update(id: number, updateGrupoDto: UpdateGrupoDto) {
    return this.prisma.grupo.update({
      where: { id },
      data: updateGrupoDto,
    });
  }

  remove(id: number) {
    return this.prisma.grupo.delete({
      where: { id },
    });
  }
}