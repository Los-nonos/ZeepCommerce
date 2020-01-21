import express, { Express } from "express";
import 'reflect-metadata';
import Router from "./Infraestructure/Router/Router";
import * as dotenv from "dotenv";
import { createConnectionDB } from "./Infraestructure/Database/Configs";
import container from "./inversify.config";
import TYPES from "./types";

class App {
  private express: Express;
  private router: Router;

  constructor() {
    dotenv.config({ path: __dirname + '/../.env' });
    this.express = express();
    createConnectionDB();
    this.router = new Router(
      this.express,
      container.get(TYPES.IUserController),
      container.get(TYPES.IProductController)
    );
  }

  public run() {
    process
      .on("unhandledRejection", (reason, p) => {
        console.error(reason, "Unhandled Rejection at Promise", p);
      })
      .on("uncaughtException", err => {
        console.error(err, "Uncaught Exception thrown");
        process.exit(1);
      });
    this.upServer();
    this.router.up();
  }

  private upServer() {
    this.express.listen(3001, function() {
      console.log("Server is run in port 3001");
    });
  }
}

const app = new App();
app.run();
