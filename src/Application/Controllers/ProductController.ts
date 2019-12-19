import { Request, Response } from "express";
import Product from "../../domain/Entity/Product";

class ProductController {

    public static Create(req: Request, res: Response){
        const {name, price, description}: any = req.body;

        if(!name){
            res.status(400).json({message: 'name not found, aborting'});
        }
        if(!price){
            res.status(400).json({message: 'price not found, aborting'});
        }
        if(!description){
            res.status(400).json({message: 'description not found, aborting'});
        }

        const product = new Product();

        product.name = name;
        product.price = price;
        product.description = description;

        try {
            product.save();
            res.status(201).json({message: 'product created', product});
        } catch (error) {
            res.status(500).json({message: 'error db'});
        }        
    }
}

export default ProductController;