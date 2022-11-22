import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Producto, ProductSchema } from './schema/productos.schema';

@Module({
  imports:[MongooseModule.forFeature([
    {
      name: Producto.name,
      schema: ProductSchema
    }
  ])],
  controllers: [ProductosController],
  providers: [ProductosService]
})
export class ProductosModule {}
