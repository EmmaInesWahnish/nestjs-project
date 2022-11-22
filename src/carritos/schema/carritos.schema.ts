import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type CarritoDocument = HydratedDocument<Carrito>;


@Schema()
export class Carrito {

    timestamp: Date;

    user_id: string;

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