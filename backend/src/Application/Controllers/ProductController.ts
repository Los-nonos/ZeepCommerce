import { Request, Response } from 'express';
import Product from '../../Domain/Entity/Product';
import ProductAdapter from '../Adapters/ProductAdapter';
import ProductDeleteHandler from '../../Domain/Handlers/Product/ProductDeleteHandler';
import ProductControllerInterface from '../../Infraestructure/Interfaces/ProductControllerInterface';
import { injectable } from 'inversify';

@injectable()
class ProductController implements ProductControllerInterface{
    
    public async Create(req: Request, res: Response) {
        const { name, price, description }: any = req.body;

        if (name == undefined) {
            res.status(400).json({ message: 'Product name not found.' })
        }

        if (price == undefined) {
            res.status(400).json({ message: 'Product price not found.' })
        }

        if (description == undefined) {
            res.status(400).json({ message: 'Product description not found.' })
        }

        const product = new Product();
        product.name = name;
        product.price = price;
        product.description = description;

        try {
            await product.save();    
        } catch (error) {
            res.status(500).json({message: error.message});
        }
        
        res.status(201).json({ message: 'Product created', product })
    }

    public async Delete(req: Request, res: Response) {
        
        var adapter = new ProductAdapter();
        var handler = new ProductDeleteHandler();
        var command = adapter.Delete(req);

        try {
            var response = await handler.Delete(command);
            res.status(200).json({message: response});    
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }
}

export default ProductController;