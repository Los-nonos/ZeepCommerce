import express, {Express} from 'express';
import Router from './infraestructure/Router/Router'
import "reflect-metadata";
import * as dotenv from 'dotenv';
import { createConnectionDB } from './infraestructure/database/Configs';

class App {

    private express :Express;
    private router: Router;

    constructor() {
        dotenv.config();
        this.express = express();
        createConnectionDB();
        this.router = new Router(
            this.express
        );
    }

    public run(){
      process
            .on('unhandledRejection', (reason, p) => {
                console.error(reason, 'Unhandled Rejection at Promise', p);
            })
            .on('uncaughtException', err => {
                console.error(err, 'Uncaught Exception thrown');
                process.exit(1);
            });
        this.upServer();
        this.router.up();
    }

    private upServer(){
        this.express.listen(3000, function(){
            console.log('Server is run in port 3000');
        });
    }

}

const app = new App()
app.run()