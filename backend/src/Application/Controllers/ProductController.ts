import { Request, Response } from 'express';
import Product from '../../Domain/Entity/Product';
import ProductAdapter from '../Adapters/ProductAdapter';
import ProductDeleteHandler from '../../Domain/Handlers/ProductDeleteHandler';
class ProductController {
    
    public static async Create(req: Request, res: Response) {
        const { name, price, description }: any = req.body;

        if (name == undefined) {
            res.status(400).json({ message: 'El nombre del producto no se encontro.' })
        }

        if (price == undefined) {
            res.status(400).json({ message: 'El precio del producto no se encontro.' })
        }

        if (description == undefined) {
            res.status(400).json({ message: 'La descripcion del producto no se encontro.' })
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
        
        res.status(201).json({ message: 'El producto se creo correctamente', product })
    }

    public static async Delete(req: Request, res: Response) {
        
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