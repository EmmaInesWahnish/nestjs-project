import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order, OrderDocument } from './schema/orders.schema';

@Injectable()
export class OrdersService {

  constructor(@InjectModel(Order.name) private ordersModel: Model<OrderDocument>){}

  create(createOrder: CreateOrderDto) {
    return this.ordersModel.create(createOrder);;
  }

  findAll() {
    return this.ordersModel.find();
  }

  findOne(id: string) {
    return this.ordersModel.findOne({_id:id});
  }

  update(id: string, updateOrderDto: UpdateOrderDto) {
    return this.ordersModel.updateOne({_id:id},{$set: updateOrderDto});
  }

  remove(id: string) {
    return this.ordersModel.deleteOne({_id:id});
  }
}
