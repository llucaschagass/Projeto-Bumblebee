import { Module } from '@nestjs/common';
import { GruposModule } from './grupos/grupos.module';
import { VeiculosModelosModule } from './veiculos-modelos/veiculos-modelos.module';
import { VeiculosModule } from './veiculos/veiculos.module';
import { ClientesModule } from './clientes/clientes.module';
import { ReservasModule } from './reservas/reservas.module';

@Module({
  imports: [
    GruposModule,
    VeiculosModelosModule,
    VeiculosModule,
    ClientesModule,
    ReservasModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
