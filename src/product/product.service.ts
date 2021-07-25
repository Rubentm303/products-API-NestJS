import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from '../product/interfaces/product.interface'
import { createProductDTO } from '../product/dto/product.dto'

@Injectable()
export class ProductService {
    constructor( @InjectModel('Product') private productModel: Model<Product>){ }

    async getProducts(): Promise<Product[]>{
        const product = await this.productModel.find();
        return product;
    }

    async getProductById(productId: string): Promise<Product>{
        const product = await this.productModel.findById(productId);
        return product;
    }

    async createProduct(createProductdto: createProductDTO): Promise<Product>{
        const newProduct = new this.productModel(createProductdto);
        return await newProduct.save();
    }

    async deleteProduct(productId: string): Promise<Product>{
        const deletedProduct = await this.productModel.findByIdAndDelete(productId);
        return deletedProduct;

    }

    async updateProduct(productId: string, createProductdto: createProductDTO): Promise<Product>{
        const updatedProduct = await this.productModel.findByIdAndUpdate(productId, createProductdto, {new: true});
        return updatedProduct;
    }

}
