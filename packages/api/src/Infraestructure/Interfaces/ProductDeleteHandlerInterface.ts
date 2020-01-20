import ProductDeleteCommand from "../../Domain/Commands/ProductCommands/ProductDeleteCommand";

interface ProductDeleteHandlerInterface {
  Handle(command: ProductDeleteCommand): Promise<string>;
}

export default ProductDeleteHandlerInterface;
