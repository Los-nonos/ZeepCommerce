import {Express,Request,Response} from 'express';
import bodyParser = require('body-parser')
import UserController from '../../Application/Controllers/UserController';

class Router {

    private express :Express;

    constructor(
        express:Express
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

        this.express.post('/users', UserController.Create);
    }
}

export default Router;