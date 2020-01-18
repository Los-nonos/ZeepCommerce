import { Container } from "inversify";
import 'reflect-metadata';
import TYPES from "./types";
import UserControllerInterface from "./Infraestructure/Interfaces/UserControllerInterface";
import UserController from "./Application/Controllers/UserController";
import  ErrorHandler  from "./Infraestructure/ErrorsHandlers/ErrorHandler";
import ProductControllerInterface from "./Infraestructure/Interfaces/ProductControllerInterface";
import ProductController from "./Application/Controllers/ProductController";
import ProductCreateHandlerInterface from "./Infraestructure/Interfaces/ProductCreateHandlerInterface";
import ProductCreateHandler from "./Domain/Handlers/Product/ProductCreateHandler";
import ProductEditHandlerInterface from "./Infraestructure/Interfaces/ProductEditHandlerInterface";
import ProductEditHandler from "./Domain/Handlers/Product/ProductEditHandler";
import ProductDeleteHandlerInterface from "./Infraestructure/Interfaces/ProductDeleteHandlerInterface";
import ProductDeleteHandler from "./Domain/Handlers/Product/ProductDeleteHandler";
import ProductAdapter from "./Application/Adapters/ProductAdapter";
import ProductAdapterInterface from "./Infraestructure/Interfaces/ProductAdapterInterface";

var container = new Container();

// Services

// User services
container.bind<UserControllerInterface>(TYPES.IUserController).to(UserController);


//Product services
container.bind<ProductAdapterInterface>(TYPES.IProductAdapter).to(ProductAdapter);
container.bind<ProductControllerInterface>(TYPES.IProductController).to(ProductController);
container.bind<ProductCreateHandlerInterface>(TYPES.IProductCreateHandler).to(ProductCreateHandler);
container.bind<ProductEditHandlerInterface>(TYPES.IProductEditHandler).to(ProductEditHandler);
container.bind<ProductDeleteHandlerInterface>(TYPES.IProductDeleteHandler).to(ProductDeleteHandler);

//Error services
container.bind<ErrorHandler>(ErrorHandler).toSelf();

export default container;