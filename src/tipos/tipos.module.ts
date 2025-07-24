import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TiposService } from './tipos.service';
import { TiposController } from './tipos.controller';
import { Tipo, TipoSchema } from './schema/tipo.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Tipo.name, schema: TipoSchema }])],
  controllers: [TiposController],
  providers: [TiposService],
  exports: [TiposService],
})
export class TiposModule {}
