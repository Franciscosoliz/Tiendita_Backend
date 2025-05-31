import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from './pagos.entity';
import { PaymentsService } from './pagos.service';
import { PaymentsController } from './pagos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Payment])],
  providers: [PaymentsService],
  controllers: [PaymentsController],
})
export class PaymentsModule {}
