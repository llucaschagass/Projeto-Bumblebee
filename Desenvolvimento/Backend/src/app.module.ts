import { Module } from '@nestjs/common';
import { GruposModule } from './grupos/grupos.module';
import { VeiculosModelosModule } from './veiculos-modelos/veiculos-modelos.module';

@Module({
  imports: [
    GruposModule,
    VeiculosModelosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
