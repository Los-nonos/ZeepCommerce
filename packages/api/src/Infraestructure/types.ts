let TYPES = {
  //Hash services Interfaces
  IHashService: Symbol('IHashService'),

  //Product Interfaces
  //IProductController: Symbol('ProductControllerInterface'),
  //IProductAdapter: Symbol('ProductAdapterInterface'),
  IProductCreateHandler: Symbol('ProductCreateHandlerInterface'),
  IProductEditHandler: Symbol('ProductEditHandlerInterface'),
  IProductDeleteHandler: Symbol('ProductDeleteHandlerInterface'),
  IProductFindHandler: Symbol('ProductFindHandlerInterface'),

  //User Interfaces
  //IUserController: Symbol('UserControllerInterface'),
  //IUserAdapter: Symbol('UserAdapterInterface'),
  ICreateUserHandler: Symbol('CreateUserHandlerInterface'),
  IDeleteUserHandler: Symbol('DeleteUserHandlerInterface'),
  IEditUserHandler: Symbol('EditUserHandlerInterface'),
  IFindUserHandler: Symbol('FindUserHandlerInterface'),
  IFindAllUsersHandler: Symbol('FindAllUsersHandlerInterface'),

  //Category Interfaces
  ICategoryCreateHandler: Symbol('CategoryCreateHandlerInterface'),
  ICategoryDeleteHandler: Symbol('CategoryDeleteHandlerInterface'),
  ICategoryEditHandler: Symbol('CategoryEditHandlerInterface'),
  ICategoryFindHandler: Symbol('CategoryFindHandlerInterface'),
  ICategoryFindAllHandler: Symbol('CategoryFindAllHandlerInterface'),
  ICategoryRepository: Symbol('CategoryRepositoryInterface'),
};

export default TYPES;
