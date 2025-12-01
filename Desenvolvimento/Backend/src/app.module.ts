import { Module } from '@nestjs/common';
import { GruposModule } from './grupos/grupos.module';

@Module({
  imports: [
    GruposModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
