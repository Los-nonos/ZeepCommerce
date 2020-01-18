let TYPES = {
    IHashService: Symbol("IHashService"),
    IUserController: Symbol("UserControllerInterface"),
    IProductController: Symbol('ProductControllerInterface'),
    
    //IProductAdapter: Symbol('ProductAdapter'),
    IProductCreateHandler: Symbol('ProductCreateHandlerInterface'),
    IProductEditHandler: Symbol('ProductEditHandlerInterface'),
    IProductDeleteHandler: Symbol('ProductDeleteHandlerInterface')
};

export default TYPES;