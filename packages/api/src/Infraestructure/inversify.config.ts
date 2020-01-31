import { Container } from 'inversify';
import 'reflect-metadata';
import TYPES from './types';

//User imports
import UserControllerInterface from './Interfaces/UserControllerInterface';
import CreateUserHandlerInterface from './Interfaces/UserInterfaces/CreateUserHandlerInterface';
import DeleteUserHandlerInterface from './Interfaces/UserInterfaces/DeleteUserHandlerInterface';
import EditUserHandlerInterface from './Interfaces/UserInterfaces/EditUserHandlerInterface';

import UserController from '../Application/Controllers/UserController';
import UserCreateHandler from '../Application/Handlers/User/UserCreateHandler';
import UserEditHandler from '../Application/Handlers/User/UserEditHandler';
import UserDeleteHandler from '../Application/Handlers/User/UserDeleteHandler';
import UserFindHandler from '../Application/Handlers/User/UserFindHandler';
import FindAllUsersHandler from '../Application/Handlers/User/FindAllUsersHandler';

//Erros imports
import ErrorHandler from '../API/Http/ErrorsHandlers/ErrorHandler';

//Product imports
import ProductControllerInterface from './Interfaces/ProductControllerInterface';
import ProductController from '../Application/Controllers/ProductController';
import ProductCreateHandlerInterface from './Interfaces/ProductCreateHandlerInterface';
import ProductCreateHandler from '../Application/Handlers/Product/ProductCreateHandler';
import ProductEditHandlerInterface from './Interfaces/ProductEditHandlerInterface';
import ProductEditHandler from '../Application/Handlers/Product/ProductEditHandler';
import ProductDeleteHandlerInterface from './Interfaces/ProductDeleteHandlerInterface';
import ProductDeleteHandler from '../Application/Handlers/Product/ProductDeleteHandler';
import ProductAdapter from '../Application/Adapters/ProductAdapter';
import ProductAdapterInterface from './Interfaces/ProductAdapterInterface';
import ProductFindHandlerInterface from './Interfaces/ProductFindHandlerInterface';
import ProductFindHandler from '../Application/Handlers/Product/ProductFindHandler';
import FindUserHandlerInterface from './Interfaces/UserInterfaces/FindUserHandlerInterface';
import CreateUserAdapterInterface from './Interfaces/UserInterfaces/UserAdapterInterface';
import UserAdapter from '../Application/Adapters/UserAdapter';
import FindAllUsersHandlerInterface from './Interfaces/UserInterfaces/FindAllUsersHandlerInterface';

var container = new Container();

// Services

//Product services
container.bind<ProductAdapterInterface>(TYPES.IProductAdapter).to(ProductAdapter);
container.bind<ProductControllerInterface>(TYPES.IProductController).to(ProductController);
container.bind<ProductCreateHandlerInterface>(TYPES.IProductCreateHandler).to(ProductCreateHandler);
container.bind<ProductEditHandlerInterface>(TYPES.IProductEditHandler).to(ProductEditHandler);
container.bind<ProductDeleteHandlerInterface>(TYPES.IProductDeleteHandler).to(ProductDeleteHandler);
container.bind<ProductFindHandlerInterface>(TYPES.IProductFindHandler).to(ProductFindHandler);

//Error services

// User services
container.bind<UserControllerInterface>(TYPES.IUserController).to(UserController);
container.bind<CreateUserHandlerInterface>(TYPES.ICreateUserHandler).to(UserCreateHandler);
container.bind<DeleteUserHandlerInterface>(TYPES.IDeleteUserHandler).to(UserDeleteHandler);
container.bind<EditUserHandlerInterface>(TYPES.IEditUserHandler).to(UserEditHandler);
container.bind<FindUserHandlerInterface>(TYPES.IFindUserHandler).to(UserFindHandler);
container.bind<FindAllUsersHandlerInterface>(TYPES.IFindAllUsersHandler).to(FindAllUsersHandler);
container.bind<CreateUserAdapterInterface>(TYPES.IUserAdapter).to(UserAdapter);

// Errors services
container.bind<ErrorHandler>(ErrorHandler).toSelf();

export default container;
