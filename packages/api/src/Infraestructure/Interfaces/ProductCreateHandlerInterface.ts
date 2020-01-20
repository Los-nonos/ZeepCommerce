import ProductCreateCommand from "../../Domain/Commands/ProductCommands/ProductCreateCommand";

interface ProductCreateHandlerInterface {
  Handle(command: ProductCreateCommand): Promise<string>;
}

export default ProductCreateHandlerInterface;
