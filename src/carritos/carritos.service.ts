import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCarritoDto } from './dto/create-carrito.dto';
import { UpdateCarritoDto } from './dto/update-carrito.dto';
import { Carrito, CarritoDocument } from './schema/carritos.schema';

@Injectable()
export class CarritosService {

  constructor(@InjectModel(Carrito.name) private carritosModel: Model<CarritoDocument>){}

  create(createCarrito: CreateCarritoDto) {
    return this.carritosModel.create(createCarrito);;
  }

  findAll() {
    return this.carritosModel.find();
  }

  findOne(id: string) {
    return this.carritosModel.findOne({_id:id});
  }

  update(id: string, updateCarritoDto: UpdateCarritoDto) {
    return this.carritosModel.updateOne({_id:id},{$set: updateCarritoDto});
  }

  remove(id: string) {
    return this.carritosModel.deleteOne({_id:id});
  }
}
