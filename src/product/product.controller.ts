import { Controller, Get, Post, Delete, Put, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import {createProductDTO} from './dto/product.dto'
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor ( private productService: ProductService) {}

    @Post('/create')
    async createPost(@Res() res: any, @Body() createProductDTO: createProductDTO){
        const newProduct = await this.productService.createProduct(createProductDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Product Succesfully Created',
            newProduct
        })
    }

    @Get('/')
    async getproducts(@Res() res: any){   
        const products = await this.productService.getProducts();
        return res.status(HttpStatus.OK).json({
            message: 'Products',
            products
        })
    }

    @Get('/:id')
    async getProductById(@Res() res:any, @Param('id') productId){
        const product = await this.productService.getProductById(productId);
        if(!product) throw new NotFoundException('Product Does Not Exist');
        return res.status(HttpStatus.OK).json({
            product
        })
    }

    @Delete('/delete')
    async deleteProduct(@Res() res, @Query('productId') productId){
        const deletedProduct = await this.productService.deleteProduct(productId);
        if(!deletedProduct) throw new NotFoundException('Product Does Not Exist');
        return res.status(HttpStatus.OK).json({
            message: 'Product Deleted!',            
        })
    }

    @Put('/update')
    async updateProductId(@Res() res, @Body() createProductdto: createProductDTO, @Query('productId') productId){
        const updatedProduct = await this.productService.updateProduct(productId, createProductdto);
        if(!updatedProduct) throw new NotFoundException('Product Does Not Exist');
        return res.status(HttpStatus.OK).json({
            message: 'Product Updated Succesfully!',
            updatedProduct 
        })
    }

}
