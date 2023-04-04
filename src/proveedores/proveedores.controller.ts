import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ProveedoresService } from './proveedores.service';
import { CreateProveedoreDto } from './dto/create-proveedore.dto';
import { UpdateProveedoreDto } from './dto/update-proveedore.dto';

@Controller('proveedores')
export class ProveedoresController {
  constructor(private readonly proveedoresService: ProveedoresService) {}

  @Post()
  create(@Body() createProveedoreDto: CreateProveedoreDto) {
    const proveedor = this.proveedoresService.create(createProveedoreDto);
    return { message: 'Proveedor creado', proveedor };
  }

  @Get()
  findAll(@Query('limit') limit: string) {
    const proveedores = this.proveedoresService.findAll(+limit || 0);
    return { message: 'Proveedores encontrados', proveedores };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const proveedor = this.proveedoresService.findOne(+id);
    return { message: 'Proveedor encontrado', proveedor };
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProveedoreDto: UpdateProveedoreDto,
  ) {
    return this.proveedoresService.update(+id, updateProveedoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proveedoresService.remove(+id);
  }
}
