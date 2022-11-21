import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop({ required: true, unique: true })
    email: String;

    @Prop({ required: true })
    password: String;

    @Prop({ required: true })
    first_name: String;

    @Prop({ required: true })
    last_name: String;
    
    @Prop()
    age: Number;

    @Prop()
    avatar: String;

    @Prop()
    cart_number: String;

    @Prop()
    delivery_address: String;
}

export const UserSchema = SchemaFactory.createForClass(User);