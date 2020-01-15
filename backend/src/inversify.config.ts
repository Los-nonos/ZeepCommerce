import { Container } from "inversify";
import 'reflect-metadata';
import TYPES from "./types";

//User imports
import UserControllerInterface from "./Infraestructure/Interfaces/UserControllerInterface";
import CreateUserHandlerInterface from './Infraestructure/Interfaces/UserInterfaces/CreateUserHandlerInterface';
import UserController from "./Application/Controllers/UserController";
import UserCreateHandler from "./Domain/Handlers/User/UserCreateHandler";
import EditUserHandlerInterface from "./Infraestructure/Interfaces/UserInterfaces/EdiUserHandlerInterface";
import UserEditHandler from "./Domain/Handlers/User/UserEditHandler";
import DeleteUserHandlerInterface from "./Infraestructure/Interfaces/UserInterfaces/DeleteUserHandlerInterface";
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
container.bind<UserControllerInterface>(TYPES.IUserController).to(UserController);
container.bind<CreateUserHandlerInterface>(TYPES.IUserCreateHandler).to(UserCreateHandler);
container.bind<EditUserHandlerInterface>(TYPES.IUserEditHandler).to(UserEditHandler);
container.bind<DeleteUserHandlerInterface>(TYPES.IUserDeleteHandler).to(UserDeleteHandler);
container.bind<FindUserHandlerInterface>(TYPES.IUserFindHandler).to(UserFindHandler);

// Product services
container.bind<ProductControllerInterface>(TYPES.IProductController).to(ProductController);


// Errors services
container.bind<ErrorHandler>(ErrorHandler).toSelf();

export default container;