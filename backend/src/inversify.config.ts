import { Container } from "inversify";
import 'reflect-metadata';
import TYPES from "./types";

//User imports
import UserControllerInterface from "./Infraestructure/Interfaces/UserControllerInterface";
import CreateUserHandlerInterface from "./Infraestructure/Interfaces/UserInterfaces/CreateUserHandlerInterface";
import DeleteUserHandlerInterface from "./Infraestructure/Interfaces/UserInterfaces/DeleteUserHandlerInterface";
import EditUserHandlerInterface from "./Infraestructure/Interfaces/UserInterfaces/EditUserHandlerInterface";

import UserController from "./Application/Controllers/UserController";
import UserCreateHandler from "./Domain/Handlers/User/UserCreateHandler";
import UserEditHandler from "./Domain/Handlers/User/UserEditHandler";
import UserDeleteHandler from "./Domain/Handlers/User/UserDeleteHandler";
import UserFindHandler from "./Domain/Handlers/User/UserFindHandler";

//Erros imports
import  ErrorHandler  from "./Infraestructure/ErrorsHandlers/ErrorHandler";

//Product imports
import ProductControllerInterface from "./Infraestructure/Interfaces/ProductControllerInterface";
import ProductController from "./Application/Controllers/ProductController";
import FindUserHandlerInterface from "./Infraestructure/Interfaces/UserInterfaces/FindUserHandlerInterface";



var container = new Container();

// User services
container.bind<UserControllerInterface>(TYPES.IUserController).to(UserController);
container.bind<CreateUserHandlerInterface>(TYPES.ICreateUserHandler).to(UserCreateHandler);
container.bind<DeleteUserHandlerInterface>(TYPES.IDeleteUserHandler).to(UserDeleteHandler);
container.bind<EditUserHandlerInterface>(TYPES.IEditUserHandler).to(UserEditHandler);
container.bind<FindUserHandlerInterface>(TYPES.IFindUserHandler).to(UserFindHandler);

// Product services
container.bind<ProductControllerInterface>(TYPES.IProductController).to(ProductController);


// Errors services
container.bind<ErrorHandler>(ErrorHandler).toSelf();

export default container;