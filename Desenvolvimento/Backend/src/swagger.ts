import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Bumblebee API')
    .setDescription('Sistema de Aluguel de Carros e Gestão de Frotas')
    .setVersion('1.0')
    .addTag('Grupos', 'Categorias e precificação')
    .addTag('Modelos', 'Catálogo de modelos')
    .addTag('Veículos', 'Gestão da frota física')
    .addTag('Clientes', 'Cadastro de clientes')
    .addTag('Reservas', 'Locações e devoluções')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}