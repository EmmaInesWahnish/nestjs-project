import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';


export type ProductoDocument = HydratedDocument<Producto>;

@Schema()
export class Producto {

    @Prop({required: true})
    timestamp: Date;

    @Prop({required:true, max:100})
    nombre: String;

    @Prop({required:true, max:100})
    descripcion: String;

    @Prop({required:true, max:100})
    codigo: String;
    
    @Prop({required: true})
    foto: String;

    @Prop({required: true})
    precio: Number;

    @Prop({required: true})
    stock: Number;

}

export const ProductSchema = SchemaFactory.createForClass(Producto);
