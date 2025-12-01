import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Começando a semear o banco...');

  // 1. Limpando dados antigos
  await prisma.reserva.deleteMany();
  await prisma.veiculo.deleteMany();
  await prisma.veiculoModelo.deleteMany();
  await prisma.grupo.deleteMany();
  await prisma.cliente.deleteMany();

  // 2. Criando Grupos
  const grupoA = await prisma.grupo.create({
    data: {
      descricao: 'Grupo A - Econômico',
      valorDiaria: 90.00,
    },
  });

  const grupoS = await prisma.grupo.create({
    data: {
      descricao: 'Grupo S - SUV Automático',
      valorDiaria: 250.00,
    },
  });

  // 3. Criando Modelos
  const mobi = await prisma.veiculoModelo.create({
    data: {
      descricao: 'Fiat Mobi Like 1.0',
      marca: 'Fiat',
      grupoId: grupoA.id,
    },
  });

  const compass = await prisma.veiculoModelo.create({
    data: {
      descricao: 'Jeep Compass Longitude',
      marca: 'Jeep',
      grupoId: grupoS.id,
    },
  });

  // 4. Criando Veículos
  await prisma.veiculo.create({
    data: {
      placa: 'ABC-1234',
      chassi: '9BW123456789',
      renavam: '12345678900',
      fabricacaoModelo: '2023/2024',
      cor: 'Branco',
      km: 15000,
      modeloId: mobi.id,
    },
  });

  await prisma.veiculo.create({
    data: {
      placa: 'XYZ-9876',
      chassi: '9BW987654321',
      renavam: '00987654321',
      fabricacaoModelo: '2024/2025',
      cor: 'Preto',
      km: 5000,
      modeloId: compass.id,
    },
  });

  // 5. Criando Cliente
  await prisma.cliente.create({
    data: {
      nome: 'João da Silva',
      email: 'joao@email.com',
      cpfCnpj: '123.456.789-00',
      telefone: '(11) 99999-9999',
    },
  });

  console.log('Banco semeado com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });