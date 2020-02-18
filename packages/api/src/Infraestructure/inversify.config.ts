import TYPES from './DI/types';
import { Container } from 'inversify';
import 'reflect-metadata';

//Users imports
import CreateUserHandlerInterface from './Interfaces/User/CreateUserHandlerInterface';
import DeleteUserHandlerInterface from './Interfaces/User/DeleteUserHandlerInterface';
import EditUserHandlerInterface from './Interfaces/User/EditUserHandlerInterface';
import FindUserHandlerInterface from './Interfaces/User/FindUserHandlerInterface';
import FindAllUsersHandlerInterface from './Interfaces/User/FindAllUsersHandlerInterface';

import UserCreateHandler from '../Application/Handlers/User/UserCreateHandler';
import UserEditHandler from '../Application/Handlers/User/UserEditHandler';
import UserDeleteHandler from '../Application/Handlers/User/UserDeleteHandler';
import UserFindHandler from '../Application/Handlers/User/UserFindHandler';
import FindAllUsersHandler from '../Application/Handlers/User/FindAllUsersHandler';

import LoginHandler from '../Application/Handlers/Auth/LoginHandler';
import RenewTokenHandler from '../Application/Handlers/Auth/RenewTokenHandler';
import ChangePasswordHandler from '../Application/Handlers/Auth/ChangePasswordHandler';

//Erros imports

//Product imports
import ProductCreateHandlerInterface from './Interfaces/Product/ProductCreateHandlerInterface';
import ProductEditHandlerInterface from './Interfaces/Product/ProductEditHandlerInterface';
import ProductDeleteHandlerInterface from './Interfaces/Product/ProductDeleteHandlerInterface';
import ProductFindHandlerInterface from './Interfaces/Product/ProductFindHandlerInterface';

import ProductCreateHandler from '../Application/Handlers/Product/ProductCreateHandler';
import ProductEditHandler from '../Application/Handlers/Product/ProductEditHandler';
import ProductDeleteHandler from '../Application/Handlers/Product/ProductDeleteHandler';
import ProductFindHandler from '../Application/Handlers/Product/ProductFindHandler';

import StoreProductAction from '../API/Http/Actions/Product/StoreProductAction';
import EditProductAction from '../API/Http/Actions/Product/EditProductAction';
import DeleteProductAction from '../API/Http/Actions/Product/DeleteProductAction';
import ShowAllProductAction from '../API/Http/Actions/Product/ShowAllProductAction';
import ShowProductAction from '../API/Http/Actions/Product/ShowProductAction';

import StoreUserAction from '../API/Http/Actions/User/StoreUserAction';
import EditUserAction from '../API/Http/Actions/User/EditUserAction';
import DeleteUserAction from '../API/Http/Actions/User/DeleteUserAction';
import ShowAllUserAction from '../API/Http/Actions/User/ShowAllUserAction';
import ShowUserAction from '../API/Http/Actions/User/ShowUserAction';

import LoginAction from '../API/Http/Actions/Auth/LoginAction';
import RenewTokenAction from '../API/Http/Actions/Auth/RenewTokenAction';
import ChangePasswordAction from '../API/Http/Actions/Auth/ChangePasswordAction';

import StoreProductAdapter from '../API/Http/Adapter/Product/StoreProductAdapter';
import EditProductAdapter from '../API/Http/Adapter/Product/EditProductAdapter';
import DeleteProductAdapter from '../API/Http/Adapter/Product/DeleteProductAdapter';
import ShowAllProductAdapter from '../API/Http/Adapter/Product/ShowAllProductAdapter';
import ShowProductAdapter from '../API/Http/Adapter/Product/ShowProductAdapter';

//Category imports
import CategoryCreateHandlerInterface from './Interfaces/Category/CategoryCreateHandlerInterface';
import CategoryEditHandlerInterface from './Interfaces/Category/CategoryEditHandlerInterface';
import CategoryDeleteHandlerInterface from './Interfaces/Category/CategoryDeleteHandlerInterface';
import CategoryFindHandlerInterface from './Interfaces/Category/CategoryFindHandlerInterface';

import CategoryCreateHandler from '../Application/Handlers/Category/CategoryCreateHandler';
import CategoryEditHandler from '../Application/Handlers/Category/CategoryEditHandler';
import CategoryDeleteHandler from '../Application/Handlers/Category/CategoryDeleteHandler';
import CategoryFindHandler from '../Application/Handlers/Category/CategoryFindHandler';

import CreateCategoryAction from '../API/Http/Actions/Category/CreateCategoryAction';
import EditCategoryAction from '../API/Http/Actions/Category/EditCategoryAction';
import DeleteCategoryAction from '../API/Http/Actions/Category/DeleteCategoryAction';
import ShowCategoryAction from '../API/Http/Actions/Category/ShowCategoryAction';
import ShowAllCategoryAction from '../API/Http/Actions/Category/ShowAllCategoryAction';

import StoreCategoryAdapter from '../API/Http/Adapter/Category/StoreCategoryAdapter';
import EditCategoryAdapter from '../API/Http/Adapter/Category/EditCategoryAdapter';
import DeleteCategoryAdapter from '../API/Http/Adapter/Category/DeleteCategoryAdapter';
import ShowAllCategoryAdapter from '../API/Http/Adapter/Category/ShowAllCategoryAdapter';
import ShowCategoryAdapter from '../API/Http/Adapter/Category/ShowCategoryAdapter';

//Erros imports
import ErrorHandler from '../Infraestructure/utils/ErrorHandler';

//Validator import
import StoreUserAdapter from '../API/Http/Adapter/User/StoreUserAdapter';
import EditUserAdapter from '../API/Http/Adapter/User/EditUserAdapter';
import DeleteUserAdapter from '../API/Http/Adapter/User/DeleteUserAdapter';
import ShowAllUserAdapter from '../API/Http/Adapter/User/ShowAllUserAdapter';
import ShowUserAdapter from '../API/Http/Adapter/User/ShowUserAdapter';

import LoginAdapter from '../API/Http/Adapter/Auth/LoginAdapter';
import RenewTokenAdapter from '../API/Http/Adapter/Auth/RenewTokenAdapter';
import ChangePasswordAdapter from '../API/Http/Adapter/Auth/ChangePasswordAdapter';

import Validator from '../API/Http/Validator/Validator';
import CategoryRepositoryInterface from '../Domain/Interfaces/CategoryRepositoryInterface';
import CategoryRepository from '../Persistance/Repositories/CategoryRepository';

var container = new Container();

//actions
//product
container.bind<StoreProductAction>(StoreProductAction).toSelf();
container.bind<EditProductAction>(EditProductAction).toSelf();
container.bind<DeleteProductAction>(DeleteProductAction).toSelf();
container.bind<ShowAllProductAction>(ShowAllProductAction).toSelf();
container.bind<ShowProductAction>(ShowProductAction).toSelf();

//category
container.bind<CreateCategoryAction>(CreateCategoryAction).toSelf();
container.bind<EditCategoryAction>(EditCategoryAction).toSelf();
container.bind<DeleteCategoryAction>(DeleteCategoryAction).toSelf();
container.bind<ShowAllCategoryAction>(ShowAllCategoryAction).toSelf();
container.bind<ShowCategoryAction>(ShowCategoryAction).toSelf();

//user
container.bind<StoreUserAction>(StoreUserAction).toSelf();
container.bind<EditUserAction>(EditUserAction).toSelf();
container.bind<DeleteUserAction>(DeleteUserAction).toSelf();
container.bind<ShowAllUserAction>(ShowAllUserAction).toSelf();
container.bind<ShowUserAction>(ShowUserAction).toSelf();

//login
container.bind<LoginAction>(LoginAction).toSelf();
container.bind<RenewTokenAction>(RenewTokenAction).toSelf();
container.bind<ChangePasswordAction>(ChangePasswordAction).toSelf();

//adapters
//product
container.bind<StoreProductAdapter>(StoreProductAdapter).toSelf();
container.bind<EditProductAdapter>(EditProductAdapter).toSelf();
container.bind<DeleteProductAdapter>(DeleteProductAdapter).toSelf();
container.bind<ShowAllProductAdapter>(ShowAllProductAdapter).toSelf();
container.bind<ShowProductAdapter>(ShowProductAdapter).toSelf();

//category
container.bind<StoreCategoryAdapter>(StoreCategoryAdapter).toSelf();
container.bind<EditCategoryAdapter>(EditCategoryAdapter).toSelf();
container.bind<DeleteCategoryAdapter>(DeleteCategoryAdapter).toSelf();
container.bind<ShowAllCategoryAdapter>(ShowAllCategoryAdapter).toSelf();
container.bind<ShowCategoryAdapter>(ShowCategoryAdapter).toSelf();

//user
container.bind<StoreUserAdapter>(StoreUserAdapter).toSelf();
container.bind<EditUserAdapter>(EditUserAdapter).toSelf();
container.bind<DeleteUserAdapter>(DeleteUserAdapter).toSelf();
container.bind<ShowAllUserAdapter>(ShowAllUserAdapter).toSelf();
container.bind<ShowUserAdapter>(ShowUserAdapter).toSelf();

//login
container.bind<LoginAdapter>(LoginAdapter).toSelf();
container.bind<RenewTokenAdapter>(RenewTokenAdapter).toSelf();
container.bind<ChangePasswordAdapter>(ChangePasswordAdapter).toSelf();

//handlers
//product
container.bind<ProductCreateHandlerInterface>(TYPES.IProductCreateHandler).to(ProductCreateHandler);
container.bind<ProductEditHandlerInterface>(TYPES.IProductEditHandler).to(ProductEditHandler);
container.bind<ProductDeleteHandlerInterface>(TYPES.IProductDeleteHandler).to(ProductDeleteHandler);
container.bind<ProductFindHandlerInterface>(TYPES.IProductFindHandler).to(ProductFindHandler);

//category
container.bind<CategoryCreateHandlerInterface>(TYPES.ICategoryCreateHandler).to(CategoryCreateHandler);
container.bind<CategoryEditHandlerInterface>(TYPES.ICategoryEditHandler).to(CategoryEditHandler);
container.bind<CategoryDeleteHandlerInterface>(TYPES.ICategoryDeleteHandler).to(CategoryDeleteHandler);
container.bind<CategoryFindHandlerInterface>(TYPES.ICategoryFindHandler).to(CategoryFindHandler);

//user
container.bind<CreateUserHandlerInterface>(TYPES.ICreateUserHandler).to(UserCreateHandler);
container.bind<DeleteUserHandlerInterface>(TYPES.IDeleteUserHandler).to(UserDeleteHandler);
container.bind<EditUserHandlerInterface>(TYPES.IEditUserHandler).to(UserEditHandler);
container.bind<FindUserHandlerInterface>(TYPES.IFindUserHandler).to(UserFindHandler);
container.bind<FindAllUsersHandlerInterface>(TYPES.IFindAllUsersHandler).to(FindAllUsersHandler);

//repositories
//product

//category
container.bind<CategoryRepositoryInterface>(TYPES.ICategoryRepository).to(CategoryRepository);

//user

//login
container.bind<LoginHandler>(LoginHandler).toSelf();
container.bind<RenewTokenHandler>(RenewTokenHandler).toSelf();
container.bind<ChangePasswordHandler>(ChangePasswordHandler).toSelf();

// Errors services
container.bind<ErrorHandler>(ErrorHandler).toSelf();

container.bind<Validator>(Validator).toSelf();

export default container;
