import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tipo, TipoDocument } from './schema/tipo.schema';

@Injectable()
export class TiposService {
  constructor(@InjectModel(Tipo.name) private tipoModel: Model<TipoDocument>) { }

  async findAll(): Promise<Tipo[]> {
    return this.tipoModel.find().exec();
  }

  async create(nombre: string): Promise<Tipo> {
    const nuevoTipo = new this.tipoModel({ nombre });
    return nuevoTipo.save();
  }

  async update(id: string, nombre: string) {
    return this.tipoModel.findByIdAndUpdate(id, { nombre }, { new: true });
  }

  async remove(id: string) {
    return this.tipoModel.findByIdAndDelete(id);
  }
}
