import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt'

@Controller('api/sessions')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}


  @Post('/register')
  async create(@Body() createUser: CreateUserDto) {
    const saltOrRounds = 10;
    if(!createUser.first_name||!createUser.email||!createUser.password||createUser.last_name){
      throw new HttpException('Incomplete values',HttpStatus.BAD_REQUEST)
    }
    const hashedPassword = await bcrypt.hash(createUser.password, saltOrRounds);
    createUser.password = hashedPassword;
    return this.usersService.create(createUser);
  }

  @Get(':email')
  async checkOne(@Param('email') email: string) {
    return await this.usersService.checkOne(email)
  }

  @Get()
  async findAll(@Query('limit') limit) {
    const users = await this.usersService.findAll(+limit);
    return {status: 'success',users};
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    let user = await this.usersService.findOne(id)
    return {status: 'success',user};
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
