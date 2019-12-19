import Product from "../../Domain/Entity/Product";
import {Request,Response} from "express";

class ProductController{

    public static Create(req: Request, res: Response){
        const product = new Product();
        product.Name = req.body.name;
        product.Price = req.body.price;
        product.Description = req.body.description;

        res.status(201).json({message: "Product created", product});
    }
}

export default ProductController;