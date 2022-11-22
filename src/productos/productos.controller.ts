import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, Query  } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Controller('api/productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post()
  create(@Body() createProducto: CreateProductoDto) {
    return this.productosService.create(createProducto);
  }

  @Get()
  async findAll() {
    const productos = await this.productosService.findAll();
    return {status: 'success', productos }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const producto = await this.productosService.findOne(id);
    return {status: 'success', producto};
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductoDto: UpdateProductoDto) {
    return this.productosService.update(id, updateProductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productosService.remove(id);
  }
}
