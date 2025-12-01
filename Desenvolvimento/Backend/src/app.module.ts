import { Module } from '@nestjs/common';
import { GruposModule } from './grupos/grupos.module';
import { VeiculosModelosModule } from './veiculos-modelos/veiculos-modelos.module';
import { VeiculosModule } from './veiculos/veiculos.module';

@Module({
  imports: [
    GruposModule,
    VeiculosModelosModule,
    VeiculosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
