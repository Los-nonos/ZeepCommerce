import {Express,Request,Response} from 'express';
import bodyParser = require('body-parser')

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
    }
}

export default Router;