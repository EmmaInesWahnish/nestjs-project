import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type CarritoDocument = HydratedDocument<Carrito>;


@Schema()
export class Carrito {

    @Prop({required: true})
    timestamp: Date;

    @Prop()
    user_id: string;

    @Prop()
    productos: [{

        id: string;

        timestamp: string;

        nombre: string;

        descripcion: string;

        codigo: string;

        foto: string;

        precio: number;

        stock: number;

        cantidad: number;
    }]

}

export const CartSchema = SchemaFactory.createForClass(Carrito);