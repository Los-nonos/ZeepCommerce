let TYPES = {
    IHashService: Symbol("IHashService"),

    IUserController: Symbol("UserControllerInterface"),

    IProductController: Symbol('ProductControllerInterface'),
    IProductAdapter: Symbol('ProductAdapterInterface'),
    IProductCreateHandler: Symbol('ProductCreateHandlerInterface'),
    IProductEditHandler: Symbol('ProductEditHandlerInterface'),
    IProductDeleteHandler: Symbol('ProductDeleteHandlerInterface'),
    IProductFindHandler: Symbol('ProductFindHandlerInterface'),
};

export default TYPES;