import { Container } from 'inversify';
import TYPES from './types';

import CreateUserHandlerInterface from '../Interfaces/User/CreateUserHandlerInterface';
import DeleteUserHandlerInterface from '../Interfaces/User/DeleteUserHandlerInterface';
import EditUserHandlerInterface from '../Interfaces/User/EditUserHandlerInterface';
import FindAllUsersHandlerInterface from '../Interfaces/User/FindAllUsersHandlerInterface';

import UserCreateHandler from '../../Application/Handlers/User/UserCreateHandler';
import UserEditHandler from '../../Application/Handlers/User/UserEditHandler';
import UserDeleteHandler from '../../Application/Handlers/User/UserDeleteHandler';
import UserFindHandler from '../../Application/Handlers/User/UserFindHandler';
import FindAllUsersHandler from '../../Application/Handlers/User/FindAllUsersHandler';

import CreateUserRoleAction from '../../API/Http/Actions/UserRole/CreateUserRoleAction';
import EditUserRoleAction from '../../API/Http/Actions/UserRole/EditUserRoleAction';
import DeleteUserRoleAction from '../../API/Http/Actions/UserRole/DeleteUserRoleAction';
import FindByIdUserRoleAction from '../../API/Http/Actions/UserRole/FindByIdUserRoleAction';
import FindUserRoleAction from '../../API/Http/Actions/UserRole/FindUserRoleAction';

import CreateUserRoleAdapter from '../../API/Http/Adapter/UserRole/CreateUserRoleAdapter';
import EditUserRoleAdapter from '../../API/Http/Adapter/UserRole/EditUserRoleAdapter';
import DeleteUserRoleAdapter from '../../API/Http/Adapter/UserRole/DeleteUserRoleAdapter';
import FindByIdUserRoleAdapter from '../../API/Http/Adapter/UserRole/FindByIdUserRoleAdapter';
import FindUserRoleAdapter from '../../API/Http/Adapter/UserRole/FindUserRoleAdapter';

import CreateUserRoleHandler from '../../Application/Handlers/UserRole/CreateUserRoleHandler';
import EditUserRoleHandler from '../../Application/Handlers/UserRole/EditUserRoleHandler';
import DeleteUserRoleHandler from '../../Application/Handlers/UserRole/DeleteUserRoleHandler';
import FindByIdUserRoleHandler from '../../Application/Handlers/UserRole/FindByIdUserRoleHandler';
import FindUserRoleHandler from '../../Application/Handlers/UserRole/FindUserRoleHandler';

import LoginHandler from '../../Application/Handlers/Auth/LoginHandler';
import RenewTokenHandler from '../../Application/Handlers/Auth/RenewTokenHandler';
import ChangePasswordHandler from '../../Application/Handlers/Auth/ChangePasswordHandler';

import UserRepository from '../../Persistance/Repositories/UserRepository';
import IUserRepository from '../../Domain/Interfaces/IUserRepository';
import UserRoleRepository from '../../Persistance/Repositories/UserRoleRepository';
import IUserRoleRepository from '../../Domain/Interfaces/IUserRoleRepository';
import CategoryRepositoryInterface from '../../Domain/Interfaces/ICategoryRepository';

//Erros imports
import ErrorHandler from '../utils/ErrorHandler';

//Product imports
import ProductCreateHandlerInterface from '../Interfaces/Product/ProductCreateHandlerInterface';
import ProductCreateHandler from '../../Application/Handlers/Product/ProductCreateHandler';
import ProductEditHandlerInterface from '../Interfaces/Product/ProductEditHandlerInterface';
import ProductEditHandler from '../../Application/Handlers/Product/ProductEditHandler';
import ProductDeleteHandlerInterface from '../Interfaces/Product/ProductDeleteHandlerInterface';
import ProductDeleteHandler from '../../Application/Handlers/Product/ProductDeleteHandler';
import ProductFindHandlerInterface from '../Interfaces/Product/ProductFindHandlerInterface';
import ProductFindHandler from '../../Application/Handlers/Product/ProductFindHandler';
import FindUserHandlerInterface from '../Interfaces/User/FindUserHandlerInterface';

import StoreProductAction from '../../API/Http/Actions/Product/StoreProductAction';
import EditProductAction from '../../API/Http/Actions/Product/EditProductAction';
import DeleteProductAction from '../../API/Http/Actions/Product/DeleteProductAction';
import ShowAllProductAction from '../../API/Http/Actions/Product/ShowAllProductAction';
import ShowProductAction from '../../API/Http/Actions/Product/ShowProductAction';

import StoreUserAction from '../../API/Http/Actions/User/StoreUserAction';
import EditUserAction from '../../API/Http/Actions/User/EditUserAction';
import DeleteUserAction from '../../API/Http/Actions/User/DeleteUserAction';
import ShowAllUserAction from '../../API/Http/Actions/User/ShowAllUserAction';
import ShowUserAction from '../../API/Http/Actions/User/ShowUserAction';

import LoginAction from '../../API/Http/Actions/Auth/LoginAction';
import RenewTokenAction from '../../API/Http/Actions/Auth/RenewTokenAction';
import ChangePasswordAction from '../../API/Http/Actions/Auth/ChangePasswordAction';

import StoreProductAdapter from '../../API/Http/Adapter/Product/StoreProductAdapter';
import EditProductAdapter from '../../API/Http/Adapter/Product/EditProductAdapter';
import DeleteProductAdapter from '../../API/Http/Adapter/Product/DeleteProductAdapter';
import ShowAllProductAdapter from '../../API/Http/Adapter/Product/ShowAllProductAdapter';
import ShowProductAdapter from '../../API/Http/Adapter/Product/ShowProductAdapter';

import StoreUserAdapter from '../../API/Http/Adapter/User/StoreUserAdapter';
import EditUserAdapter from '../../API/Http/Adapter/User/EditUserAdapter';
import DeleteUserAdapter from '../../API/Http/Adapter/User/DeleteUserAdapter';
import ShowAllUserAdapter from '../../API/Http/Adapter/User/ShowAllUserAdapter';
import ShowUserAdapter from '../../API/Http/Adapter/User/ShowUserAdapter';

import LoginAdapter from '../../API/Http/Adapter/Auth/LoginAdapter';
import RenewTokenAdapter from '../../API/Http/Adapter/Auth/RenewTokenAdapter';
import ChangePasswordAdapter from '../../API/Http/Adapter/Auth/ChangePasswordAdapter';

import Validator from '../../API/Http/Validator/Validator';
import CategoryRepository from '../../Persistance/Repositories/CategoryRepository';
import CategoryCreateHandler from '../../Application/Handlers/Category/CategoryCreateHandler';
import CategoryEditHandler from '../../Application/Handlers/Category/CategoryEditHandler';
import CategoryDeleteHandler from '../../Application/Handlers/Category/CategoryDeleteHandler';
import CategoryFindHandler from '../../Application/Handlers/Category/CategoryFindHandler';

import CategoryCreateHandlerInterface from '../Interfaces/Category/CategoryCreateHandlerInterface';
import CategoryEditHandlerInterface from '../Interfaces/Category/CategoryEditHandlerInterface';
import CategoryDeleteHandlerInterface from '../Interfaces/Category/CategoryDeleteHandlerInterface';
import CategoryFindHandlerInterface from '../Interfaces/Category/CategoryFindHandlerInterface';

import StoreCategoryAdapter from '../../API/Http/Adapter/Category/StoreCategoryAdapter';
import EditCategoryAdapter from '../../API/Http/Adapter/Category/EditCategoryAdapter';
import DeleteCategoryAdapter from '../../API/Http/Adapter/Category/DeleteCategoryAdapter';
import ShowAllCategoryAdapter from '../../API/Http/Adapter/Category/ShowAllCategoryAdapter';
import ShowCategoryAdapter from '../../API/Http/Adapter/Category/ShowCategoryAdapter';

import CreateCategoryAction from '../../API/Http/Actions/Category/CreateCategoryAction';
import EditCategoryAction from '../../API/Http/Actions/Category/EditCategoryAction';
import DeleteCategoryAction from '../../API/Http/Actions/Category/DeleteCategoryAction';
import ShowAllCategoryAction from '../../API/Http/Actions/Category/ShowAllCategoryAction';
import ShowCategoryAction from '../../API/Http/Actions/Category/ShowCategoryAction';

var container = new Container();

//actions
//product
container.bind<StoreProductAction>(StoreProductAction).toSelf();
container.bind<EditProductAction>(EditProductAction).toSelf();
container.bind<DeleteProductAction>(DeleteProductAction).toSelf();
container.bind<ShowAllProductAction>(ShowAllProductAction).toSelf();
container.bind<ShowProductAction>(ShowProductAction).toSelf();

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

//userroles
container.bind<CreateUserRoleAction>(CreateUserRoleAction).toSelf();
container.bind<EditUserRoleAction>(EditUserRoleAction).toSelf();
container.bind<DeleteUserRoleAction>(DeleteUserRoleAction).toSelf();
container.bind<FindByIdUserRoleAction>(FindByIdUserRoleAction).toSelf();
container.bind<FindUserRoleAction>(FindUserRoleAction).toSelf();

container.bind<CreateCategoryAction>(CreateCategoryAction).toSelf();
container.bind<EditCategoryAction>(EditCategoryAction).toSelf();
container.bind<DeleteCategoryAction>(DeleteCategoryAction).toSelf();
container.bind<ShowAllCategoryAction>(ShowAllCategoryAction).toSelf();
container.bind<ShowCategoryAction>(ShowCategoryAction).toSelf();

//adapters
//product
container.bind<StoreProductAdapter>(StoreProductAdapter).toSelf();
container.bind<EditProductAdapter>(EditProductAdapter).toSelf();
container.bind<DeleteProductAdapter>(DeleteProductAdapter).toSelf();
container.bind<ShowAllProductAdapter>(ShowAllProductAdapter).toSelf();
container.bind<ShowProductAdapter>(ShowProductAdapter).toSelf();

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

//userroles
container.bind<CreateUserRoleAdapter>(CreateUserRoleAdapter).toSelf();
container.bind<EditUserRoleAdapter>(EditUserRoleAdapter).toSelf();
container.bind<DeleteUserRoleAdapter>(DeleteUserRoleAdapter).toSelf();
container.bind<FindByIdUserRoleAdapter>(FindByIdUserRoleAdapter).toSelf();
container.bind<FindUserRoleAdapter>(FindUserRoleAdapter).toSelf();

container.bind<StoreCategoryAdapter>(StoreCategoryAdapter).toSelf();
container.bind<EditCategoryAdapter>(EditCategoryAdapter).toSelf();
container.bind<DeleteCategoryAdapter>(DeleteCategoryAdapter).toSelf();
container.bind<ShowAllCategoryAdapter>(ShowAllCategoryAdapter).toSelf();
container.bind<ShowCategoryAdapter>(ShowCategoryAdapter).toSelf();

//handlers
//product
container.bind<ProductCreateHandlerInterface>(TYPES.IProductCreateHandler).to(ProductCreateHandler);
container.bind<ProductEditHandlerInterface>(TYPES.IProductEditHandler).to(ProductEditHandler);
container.bind<ProductDeleteHandlerInterface>(TYPES.IProductDeleteHandler).to(ProductDeleteHandler);
container.bind<ProductFindHandlerInterface>(TYPES.IProductFindHandler).to(ProductFindHandler);

//user
container.bind<CreateUserHandlerInterface>(TYPES.ICreateUserHandler).to(UserCreateHandler);
container.bind<DeleteUserHandlerInterface>(TYPES.IDeleteUserHandler).to(UserDeleteHandler);
container.bind<EditUserHandlerInterface>(TYPES.IEditUserHandler).to(UserEditHandler);
container.bind<FindUserHandlerInterface>(TYPES.IFindUserHandler).to(UserFindHandler);
container.bind<FindAllUsersHandlerInterface>(TYPES.IFindAllUsersHandler).to(FindAllUsersHandler);

//login
container.bind<LoginHandler>(LoginHandler).toSelf();
container.bind<RenewTokenHandler>(RenewTokenHandler).toSelf();
container.bind<ChangePasswordHandler>(ChangePasswordHandler).toSelf();

//user roles
container.bind<CreateUserRoleHandler>(CreateUserRoleHandler).toSelf();
container.bind<EditUserRoleHandler>(EditUserRoleHandler).toSelf();
container.bind<DeleteUserRoleHandler>(DeleteUserRoleHandler).toSelf();
container.bind<FindByIdUserRoleHandler>(FindByIdUserRoleHandler).toSelf();
container.bind<FindUserRoleHandler>(FindUserRoleHandler).toSelf();

container.bind<CategoryCreateHandlerInterface>(TYPES.ICategoryCreateHandler).to(CategoryCreateHandler);
container.bind<CategoryEditHandlerInterface>(TYPES.ICategoryEditHandler).to(CategoryEditHandler);
container.bind<CategoryDeleteHandlerInterface>(TYPES.ICategoryDeleteHandler).to(CategoryDeleteHandler);
container.bind<CategoryFindHandlerInterface>(TYPES.ICategoryFindHandler).to(CategoryFindHandler);

// Errors services
container.bind<ErrorHandler>(ErrorHandler).toSelf();

//repositories
container.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository);
container.bind<IUserRoleRepository>(TYPES.IUserRolesRepository).to(UserRoleRepository);
container.bind<CategoryRepositoryInterface>(TYPES.ICategoryRepository).to(CategoryRepository);

container.bind<Validator>(Validator).toSelf();

export default container;
