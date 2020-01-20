let TYPES = {
    //Hash services Interfaces
    IHashService: Symbol("IHashService"),


    //User Interfaces
    ICreateUserHandler : Symbol('CreateUserHandlerInterface'),
    IDeleteUserHandler : Symbol('DeleteUserHandlerInterface'),
    IEditUserHandler : Symbol('EditUserHandlerInterface'),
    IFindUserHandler : Symbol('FindUserHandlerInterface'),
    IUserController : Symbol('UserControllerInterface'),
    //Product Interfaces
    IProductController: Symbol('ProductControllerInterface'),

};

export default TYPES;