import { Container } from "inversify";
import 'reflect-metadata';
import TYPES from "./types";

//User imports
import UserController from "./Application/Controllers/UserController";
import UserCreateHandler from "./Domain/Handlers/User/UserCreateHandler";
import UserEditHandler from "./Domain/Handlers/User/UserEditHandler";
import UserDeleteHandler from "./Domain/Handlers/User/UserDeleteHandler";

//Erros imports
import  ErrorHandler  from "./Infraestructure/ErrorsHandlers/ErrorHandler";

//Product imports
import ProductControllerInterface from "./Infraestructure/Interfaces/ProductControllerInterface";
import ProductController from "./Application/Controllers/ProductController";
import FindUserHandlerInterface from "./Infraestructure/Interfaces/UserInterfaces/FindUserHandlerInterface";
import UserFindHandler from "./Domain/Handlers/User/UserFindHandler";


var container = new Container();

// User services
container.bind<UserController>(UserController).toSelf();
container.bind<UserCreateHandler>(UserCreateHandler).toSelf();
container.bind<UserEditHandler>(UserEditHandler).toSelf();
container.bind<UserDeleteHandler>(UserDeleteHandler).toSelf();
container.bind<UserFindHandler>(UserFindHandler).toSelf();

// Product services
container.bind<ProductControllerInterface>(TYPES.IProductController).to(ProductController);


// Errors services
container.bind<ErrorHandler>(ErrorHandler).toSelf();

export default container;