import { Injectable } from '@nestjs/common';
import { CreateProveedoreDto } from './dto/create-proveedore.dto';
import { UpdateProveedoreDto } from './dto/update-proveedore.dto';
import { Proveedore } from './entities/proveedore.entity';

@Injectable()
export class ProveedoresService {
  proveedores: Array<Proveedore>;
  constructor() {
    this.proveedores = [
      { id: 1, name: 'Proveedor 1', city: 'City 1' },
      { id: 2, name: 'Proveedor 2', city: 'City 2' },
    ];
  }

  create(createProveedoreDto: CreateProveedoreDto) {
    const id = this.generateId();
    const proveedorNuevo = { id, ...createProveedoreDto };
    this.proveedores.push(proveedorNuevo);
    return proveedorNuevo;
  }

  findAll(): Array<Proveedore> {
    return this.proveedores;
  }

  findOne(id: number): Proveedore {
    const proveedor = this.proveedores.find((item) => item.id === id);
    return proveedor;
  }

  update(id: number, updateProveedoreDto: UpdateProveedoreDto) {
    return `This action updates a #${id} proveedore`;
  }

  remove(id: number) {
    return `This action removes a #${id} proveedore`;
  }

  private generateId(): number {
    return this.proveedores.length === 0
      ? 1
      : this.proveedores[this.proveedores.length - 1].id + 1;
  }
}
