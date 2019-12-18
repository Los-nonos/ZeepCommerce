import { Express, Request, Response } from 'express';
import bodyParser = require('body-parser')

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

        // this.express.get('apiv1/products', ProductController.GetAllProducts);
    }
}

export default Router;