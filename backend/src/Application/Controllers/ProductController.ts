import { Request, Response } from 'express';
import Product from '../../Domain/Entity/Product';
import ProductControllerInterface from '../../Infraestructure/Interfaces/ProductControllerInterface'
import { injectable } from 'inversify';
import ProductAdapter from '../Adapters/ProductAdapter';
import ProductCreateHandler from '../../Domain/Handlers/ProductCreateHandler';
import ProductEditHandler from '../../Domain/Handlers/ProductEditHandler';
import ProductDeleteHandler from '../../Domain/Handlers/ProductDeleteHandler';

@injectable()
class ProductController implements ProductControllerInterface{
    
    public async Create(req: Request, res: Response) {

       var adapter = new ProductAdapter();
       var command = adapter.CreateAdapter(req);

       var handler = new ProductCreateHandler();

       try {
           var response = await handler.Handle(command);
           res.status(200).json({message: response});

       } catch(error) {
           res.status(500).json({message: error.message});
       }
    }

    public async Edit(req: Request, res: Response){

        var adapter = new ProductAdapter();
        var command = adapter.EditAdapter(req);

        var handler = new ProductEditHandler();

        try {
            var response = await handler.Handle(command);
            res.status(200).json({message: response});

        } catch(error) {
            res.status(500).json({message: error.message});
        }
    }

    public async Delete(req: Request, res: Response) {
        
        var adapter = new ProductAdapter();
        var command = adapter.DeleteAdapter(req);

        var handler = new ProductDeleteHandler();

        try {
            var response = await handler.Handle(command);
            res.status(200).json({message: response});    

        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }
}

export default ProductController;