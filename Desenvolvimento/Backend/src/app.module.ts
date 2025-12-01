import { Module } from '@nestjs/common';
import { GruposModule } from './grupos/grupos.module';
import { VeiculosModelosModule } from './veiculos-modelos/veiculos-modelos.module';
import { VeiculosModule } from './veiculos/veiculos.module';
import { ClientesModule } from './clientes/clientes.module';

@Module({
  imports: [
    GruposModule,
    VeiculosModelosModule,
    VeiculosModule,
    ClientesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
