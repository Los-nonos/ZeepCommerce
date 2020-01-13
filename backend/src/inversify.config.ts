import { Container } from "inversify";
import 'reflect-metadata';
import TYPES from "./types";
import UserControllerInterface from "./Infraestructure/Interfaces/UserControllerInterface";
import UserController from "./Application/Controllers/UserController";
import  ErrorHandler  from "./Infraestructure/ErrorsHandlers/ErrorHandler";
import ProductControllerInterface from "./Infraestructure/Interfaces/ProductControllerInterface";
import ProductController from "./Application/Controllers/ProductController";

var container = new Container();

// Services
container.bind<UserControllerInterface>(TYPES.IUserController).to(UserController);
container.bind<ProductControllerInterface>(TYPES.IProductController).to(ProductController);
container.bind<ErrorHandler>(ErrorHandler).toSelf();

export default container;