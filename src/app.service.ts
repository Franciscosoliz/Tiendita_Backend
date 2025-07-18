import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World con NestJS Tiendita esta online! version: 2025.07.17.21.33';
  }
}
