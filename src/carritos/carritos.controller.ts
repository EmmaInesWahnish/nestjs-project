import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarritosService } from './carritos.service';
import { CreateCarritoDto } from './dto/create-carrito.dto';
import { UpdateCarritoDto } from './dto/update-carrito.dto';

@Controller('api/carritos')
export class CarritosController {
  constructor(private readonly carritosService: CarritosService) {}

  @Post()
  create(@Body() createCarritoDto: CreateCarritoDto) {
    return this.carritosService.create(createCarritoDto);
  }

  @Get()
  async findAll() {
    const carritos = await this.carritosService.findAll();
    return {status: 'success', carritos};
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const carrito = await this.carritosService.findOne(id);
    return {status: 'success', carrito};
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarritoDto: UpdateCarritoDto) {
    return this.carritosService.update(id, updateCarritoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carritosService.remove(id);
  }
}
