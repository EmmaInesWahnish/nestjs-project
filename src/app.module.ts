import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProductosModule } from './productos/productos.module';
import { CarritosModule } from './carritos/carritos.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [UsersModule,
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject:[ConfigService],
      useFactory: async(config:ConfigService) =>({
        uri: config.get<string>('URL')
      })
    }),
    ProductosModule,
    CarritosModule,
    OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
