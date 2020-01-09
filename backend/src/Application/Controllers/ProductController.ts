import { Request, Response } from 'express';
import Product from '../../Domain/Entity/Product';
import ProductControllerInterface from '../../Infraestructure/Interfaces/ProductControllerInterface'
import { injectable } from 'inversify';
import ProductAdapter from '../Adapters/ProductAdapter';
import ProductDeleteHandler from '../../Domain/Handlers/ProductDeleteHandler';

@injectable()
class ProductController implements ProductControllerInterface{
    
    public async Create(req: Request, res: Response) {
        const { name, price, description }: any = req.body;

        if (!name) {
            res.status(400).json({ message: 'Not product name foud' })
        }

        if (!price) {
            res.status(400).json({ message: 'Not product price found' })
        }

        if (!description) {
            res.status(400).json({ message: 'Not product description found' })
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
        
        res.status(201).json({ message: 'Product created correctly', product })
    }

    public async Edit(req: Request, res: Response){

    }

    public async Delete(req: Request, res: Response) {
        
        var adapter = new ProductAdapter();
        var command = adapter.DeleteAdapter(req);

        var handler = new ProductDeleteHandler();

        try {
            var response = await handler.handle(command);
            res.status(200).json({message: response});    
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }
}

export default ProductController;