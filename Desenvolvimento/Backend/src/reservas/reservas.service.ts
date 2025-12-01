import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ReservasService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateReservaDto) {
    const inicio = new Date(dto.dataInicio);
    const fim = new Date(dto.dataFim);

    // 1. Validação de Datas
    if (fim <= inicio) {
      throw new BadRequestException('A data final deve ser maior que a inicial.');
    }

    let carroDisponivelId: number | null = null;
    let valorDiaria = 0;

    // Cliente escolheu um grupo de veículos
    if (dto.grupoId) {
      // Busca o primeiro carro do grupo que NÃO tem conflito de agenda
      const veiculoVago = await this.prisma.veiculo.findFirst({
        where: {
          modelo: { grupoId: dto.grupoId }, // Filtra pelo grupo
          reservas: {
            none: {
              AND: [
                { dataInicio: { lt: fim } },
                { dataFim: { gt: inicio } },
                { status: { not: 'CANCELADA' } } // Ignora reservas canceladas
              ]
            }
          }
        },
        include: { modelo: { include: { grupo: true } } } // Pega o preço
      });

      if (!veiculoVago) {
        throw new BadRequestException('Não há veículos disponíveis neste grupo para o período selecionado.');
      }

      carroDisponivelId = veiculoVago.id;
      valorDiaria = veiculoVago.modelo.grupo.valorDiaria;
    } 
    
    // Cliente escolheu um veículo específico
    else if (dto.veiculoId) {
      // Verifica se o carro específico está livre
      const conflito = await this.prisma.reserva.findFirst({
        where: {
          veiculoId: dto.veiculoId,
          dataInicio: { lt: fim },
          dataFim: { gt: inicio },
          status: { not: 'CANCELADA' }
        }
      });

      if (conflito) {
        throw new BadRequestException('Este veículo específico já está reservado neste período.');
      }

      // Busca dados para pegar o preço
      const veiculo = await this.prisma.veiculo.findUnique({
        where: { id: dto.veiculoId },
        include: { modelo: { include: { grupo: true } } }
      });

      if (!veiculo) throw new BadRequestException('Veículo não encontrado');

      carroDisponivelId = veiculo.id;
      valorDiaria = veiculo.modelo.grupo.valorDiaria;
    } else {
      throw new BadRequestException('Você deve informar o Grupo (grupoId) ou o Veículo (veiculoId).');
    }

    // 3. Calcula Valor Total
    const diffTime = Math.abs(fim.getTime() - inicio.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    // Se for menos de 1 dia, cobra 1 diária cheia
    const diasCobrados = diffDays > 0 ? diffDays : 1; 
    const total = diasCobrados * valorDiaria;

    // 4. Efetiva a Reserva
    return this.prisma.reserva.create({
      data: {
        dataInicio: inicio,
        dataFim: fim,
        clienteId: dto.clienteId,
        veiculoId: carroDisponivelId,
        valorTotal: total,
        status: 'ATIVA'
      },
    });
  }

  findAll() {
    return this.prisma.reserva.findMany({
      include: {
        cliente: true,
        veiculo: {
          include: { modelo: true }
        }
      }
    });
  }

  findOne(id: number) {
    return this.prisma.reserva.findUnique({
      where: { id },
      include: { cliente: true, veiculo: true }
    });
  }

  update(id: number, dto: UpdateReservaDto) {
    return this.prisma.reserva.update({
      where: { id },
      data: dto,
    });
  }

  remove(id: number) {
    return this.prisma.reserva.delete({ where: { id } });
  }
}