let TYPES = {
    //Hash services Interfaces
    IHashService: Symbol("IHashService"),


    //User Interfaces
    ICreateUserHandler : Symbol('CreateUserHandlerInterface'),
    IDeleteUserHandler : Symbol('DeleteUserHandlerInterface'),
    IEditUserHandler : Symbol('EditUserHandlerInterface'),
    IFindUserHandler : Symbol('FindUserHandlerInterface'),
    IFindAllUsersHandler : Symbol('FindAllUsersHandlerInterface'),
    IUserController : Symbol('UserControllerInterface'),
    IUserAdapter : Symbol('UserAdapterInterface'),
    //Product Interfaces
    IProductController: Symbol('ProductControllerInterface'),

};

export default TYPES;