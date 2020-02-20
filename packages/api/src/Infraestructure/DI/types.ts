let TYPES = {
  //Hash services Interfaces
  IHashService: Symbol('IHashService'),

  //Product Interfaces
  IProductCreateHandler: Symbol('ProductCreateHandlerInterface'),
  IProductEditHandler: Symbol('ProductEditHandlerInterface'),
  IProductDeleteHandler: Symbol('ProductDeleteHandlerInterface'),
  IProductFindHandler: Symbol('ProductFindHandlerInterface'),

  //User Interfaces
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

  IUserAdapter: Symbol('UserAdapterInterface'),
  IUserRepository: Symbol('IUserRepository'),

  IUserRolesRepository: Symbol('IUserRoleRepository'),
  //Product Interfaces
};

export default TYPES;
