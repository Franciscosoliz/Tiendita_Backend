// roles.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RoleDocument = Role & Document;

@Schema({ timestamps: true })
export class Role {
  @Prop({ required: true, unique: true })
  name: string;  // Ejemplo: 'admin', 'usuario', 'moderador'
}

export const RoleSchema = SchemaFactory.createForClass(Role);
