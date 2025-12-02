import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
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

  async findAll() {
    const grupos = await this.prisma.grupo.findMany({
      orderBy: { id: 'asc' },
      include: { modelos: true }
    });
    return grupos; 
  }

  async findDisponiveis(inicioString: string, fimString: string) {
    if (!inicioString || !fimString) {
      throw new BadRequestException('As datas de inicio e fim são obrigatórias para verificar disponibilidade.');
    }

    const inicio = new Date(inicioString);
    const fim = new Date(fimString);

    const grupos = await this.prisma.grupo.findMany({
      orderBy: { id: 'asc' },
      include: {
        modelos: {
          include: {
            veiculos: {
              include: {
                reservas: {
                  where: {
                    status: 'ATIVA',
                    dataInicio: { lt: fim },
                    dataFim: { gt: inicio }
                  }
                }
              }
            }
          }
        }
      }
    });

    return grupos.map(grupo => this.formatarGrupo(grupo));
  }

  async findOne(id: number) {
    const grupo = await this.prisma.grupo.findUnique({
      where: { id },
      include: {
        modelos: {
          include: {
            veiculos: {
              include: {
                reservas: {
                  where: {
                    status: 'ATIVA',
                    dataInicio: { lte: new Date() },
                    dataFim: { gte: new Date() }
                  }
                }
              }
            }
          }
        }
      }
    });

    if (!grupo) {
      throw new NotFoundException(`Grupo com ID ${id} não encontrado.`);
    }

    return this.formatarGrupo(grupo);
  }

  async update(id: number, updateGrupoDto: UpdateGrupoDto) {
    await this.findOne(id); // Garante que existe

    return this.prisma.grupo.update({
      where: { id },
      data: updateGrupoDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id); // Garante que existe

    return this.prisma.grupo.delete({ where: { id } });
  }

  // Helper para calcular totais e disponibilidade
  private formatarGrupo(grupo: any) {
    const todosVeiculos = grupo.modelos.flatMap(modelo => modelo.veiculos);
    const totalFrota = todosVeiculos.length;
    
    // Disponível se não tiver reservas ativas
    const disponiveis = todosVeiculos.filter(v => v.reservas.length === 0).length;

    return {
      id: grupo.id,
      descricao: grupo.descricao,
      valorDiaria: grupo.valorDiaria,
      totalFrota,
      disponiveis,
      modelos: grupo.modelos.map(m => ({
        id: m.id,
        descricao: m.descricao,
        marca: m.marca
      }))
    };
  }
}