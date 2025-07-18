import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pagos } from './pagos.entity';
import { PagossService } from './pagos.service';
import { PagossController } from './pagos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Pagos])],
  providers: [PagossService],
  controllers: [PagossController],
})
export class PagossModule {}
