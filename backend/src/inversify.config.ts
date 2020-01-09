import { Container } from "inversify";
import 'reflect-metadata';
import TYPES from "./types";
import UserControllerInterface from "./Infraestructure/Interfaces/UserControllerInterface";
import UserController from "./Application/Controllers/UserController";
import { ErrorHandler } from "./Infraestructure/ErrorHandler/ErrorHandler";
var container = new Container();

// Services
container.bind<UserControllerInterface>(TYPES.IUserController).to(UserController);

container.bind<ErrorHandler>(ErrorHandler).toSelf();

export default container;