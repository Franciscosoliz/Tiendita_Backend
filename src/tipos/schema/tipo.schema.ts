import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TipoDocument = Tipo & Document;

@Schema()
export class Tipo {
  @Prop({ required: true })
  nombre: string;
}

export const TipoSchema = SchemaFactory.createForClass(Tipo);
