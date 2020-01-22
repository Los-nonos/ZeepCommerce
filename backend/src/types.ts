let TYPES = {
    //Hash services Interfaces
    IHashService: Symbol("IHashService"),


    IProductController: Symbol('ProductControllerInterface'),
    IProductAdapter: Symbol('ProductAdapterInterface'),
    IProductCreateHandler: Symbol('ProductCreateHandlerInterface'),
    IProductEditHandler: Symbol('ProductEditHandlerInterface'),
    IProductDeleteHandler: Symbol('ProductDeleteHandlerInterface'),
    IProductFindHandler: Symbol('ProductFindHandlerInterface'),

    //User Interfaces
    ICreateUserHandler : Symbol('CreateUserHandlerInterface'),
    IDeleteUserHandler : Symbol('DeleteUserHandlerInterface'),
    IEditUserHandler : Symbol('EditUserHandlerInterface'),
    IFindUserHandler : Symbol('FindUserHandlerInterface'),
    IFindAllUsersHandler : Symbol('FindAllUsersHandlerInterface'),
    IUserController : Symbol('UserControllerInterface'),
    IUserAdapter : Symbol('UserAdapterInterface'),
    //Product Interfaces
};

export default TYPES;