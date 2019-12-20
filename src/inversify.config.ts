import { Container } from "inversify";
import 'reflect-metadata';
import TYPES from "./types";
import UserControllerInterface from "./Infraestructure/Interfaces/UserControllerInterface";
import UserController from "./Application/Controllers/UserController";
var container = new Container();

// Services
container.bind<UserControllerInterface>(TYPES.IUserController).to(UserController);

export default container;