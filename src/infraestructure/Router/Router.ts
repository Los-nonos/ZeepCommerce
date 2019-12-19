import { Express, Request, Response } from 'express';
import bodyParser = require('body-parser')
import UserController from '../../Application/Controllers/UserController';
import ProductController from '../../Application/Controllers/ProductController';

class Router {

    private express: Express;
    
    constructor(
        express: Express
    ) {
        this.express = express;
    }

    public up() {
        this.userRoutes();
    }

    private userRoutes() {
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(bodyParser.json());

        //here routes
        this.express.get('/', (req: Request, res: Response) => {
            res.send("hola");
        });

        this.express.post('/users', UserController.Create);
        // this.express.get('apiv1/products', ProductController.GetAllProducts);

        this.express.post('/products', ProductController.Create);
    }

}

export default Router;