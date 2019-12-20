import {Express,Request,Response} from 'express';
import bodyParser = require('body-parser')
import UserController from '../../Application/Controllers/UserController';
import ProductController from '../../Application/Controllers/ProductController';
import UserControllerInterface from '../Interfaces/UserControllerInterface';
import {inject} from 'inversify';
import TYPES from '../../types';

class Router {

    private express :Express;
    private userController: UserControllerInterface;

    constructor(
        express:Express,
        @inject(TYPES.IUserController) userController: UserControllerInterface
    ) {
        this.express = express;
    }

    public up(){
        this.userRoutes()

    }

    private userRoutes(){
        this.express.use(bodyParser.urlencoded({extended: false}));
        this.express.use(bodyParser.json());

        //here routes

        this.express.post('/users', this.userController.Create);
        this.express.post('/products', ProductController.Create);
    }

}

export default Router;