import { Express } from 'express';
import express = require('express');
import Router from './Infraestructure/Router/Router';
import 'reflect-metadata';
import * as dotenv from 'dotenv';
import { createConnectionDB } from './Infraestructure/Database/Configs';

class App {
  private express: Express;
  private router: Router;

  constructor() {
    dotenv.config();
    this.express = express();
    createConnectionDB();
    this.router = new Router(this.express);
  }

  public run() {
    process
      .on('unhandledRejection', (reason, p) => {
        console.error(reason, 'Unhandled Rejection at Promise', p);
      })
      .on('uncaughtException', err => {
        console.error(err, 'Uncaught Exception thrown');
        process.exit(1);
      });

    const port = parseInt(process.env.API_PORT, 10) || 3001;
    this.upServer(port);
    this.router.up();
  }

  private upServer(port: number) {
    this.express.listen(port, function() {
      console.log(`Server is run in port ${port}`);
    });
  }
}

const app = new App();
app.run();
