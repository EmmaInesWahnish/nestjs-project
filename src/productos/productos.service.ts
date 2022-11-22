import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto, ProductoDocument } from './schema/productos.schema';

@Injectable()
export class ProductosService {

  constructor(@InjectModel(Producto.name) private productosModel: Model<ProductoDocument>){}

  create(createProducto: CreateProductoDto) {
    return this.productosModel.create(createProducto);
  }

  findAll() {
    return this.productosModel.find();
  }

  findOne(id: string) {
    return this.productosModel.findOne({_id:id});
  }

  update(id: string, updateProductoDto: UpdateProductoDto) {
    return this.productosModel.updateOne({_id:id},{$set: updateProductoDto});
  }

  remove(id: string) {
    return this.productosModel.deleteOne({_id:id});
  }
}
