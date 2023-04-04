import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductDocument } from './schema/products.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductsService {
  productModel: any;
  constructor(@InjectModel(Product.name) productModel: Model<ProductDocument>) {
    this.productModel = productModel;
  }

  create(createProductDto: CreateProductDto) {
    return this.productModel.create(createProductDto);
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
function InjecModel(
  name: string,
): (
  target: typeof ProductsService,
  propertyKey: undefined,
  parameterIndex: 0,
) => void {
  throw new Error('Function not implemented.');
}
