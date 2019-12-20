import { Request, Response } from 'express';
import Product from '../../Domain/Entity/Product';
class ProductController {
    public static Create(req: Request, res: Response) {
        req.body
        const { name, price, description }: any = req.body;

        if (name==undefined)
        {
            res.status(400).json({message:'El nombre del producto no se encontro.'})
        }

        if (price==undefined)
        {
            res.status(400).json({message:'El precio del producto no se encontro.'})
        }

        if (description==undefined)
        {
            res.status(400).json({message:'La descripcion del producto no se encontro.'})
        }

        const product = new Product ();
        product.name = name;
        product.price = price;
        product.description = description;

        res.status(201).json({message:'El producto se creo correctamente', product})
    }
}

export default ProductController;