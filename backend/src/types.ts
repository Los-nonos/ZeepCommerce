let TYPES = {
    //Hash services Interfaces
    IHashService: Symbol("IHashService"),


    //User Interfaces
    IUserController: Symbol("UserControllerInterface"),
    IUserCreateHandler: Symbol("CreateUserHandlerInterface"),
    IUserEditHandler: Symbol("UserEditHandlerInterface"),
    IUserDeleteHandler: Symbol("UserDeleteHandlerInterface"),
    IUserFindHandler: Symbol("FindUserHandlerInterface"),

    //Product Interfaces
    IProductController: Symbol('ProductControllerInterface'),

};

export default TYPES;