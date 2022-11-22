import { Module } from '@nestjs/common';
import { CarritosService } from './carritos.service';
import { CarritosController } from './carritos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Carrito, CartSchema } from './schema/carritos.schema';

@Module({
  imports:[MongooseModule.forFeature([
    {
      name: Carrito.name,
      schema: CartSchema
    }
  ])],
  controllers: [CarritosController],
  providers: [CarritosService]
})
export class CarritosModule {}
