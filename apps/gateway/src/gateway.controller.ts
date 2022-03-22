import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class GatewayController {
  constructor(@Inject('MICRO') private readonly mik: ClientProxy) {}

  @Get()
  getHello() {
    return this.mik.send('greet', '');
  }
}
