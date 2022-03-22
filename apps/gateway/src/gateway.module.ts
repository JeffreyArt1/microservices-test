import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { GatewayController } from './gateway.controller';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'MICRO', transport: Transport.TCP, options: { port: 3535 } },
    ]),
  ],
  controllers: [GatewayController],
})
export class GatewayModule {}
