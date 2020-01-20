import ProductEditCommand from "../../Domain/Commands/ProductCommands/ProductEditCommand";

interface ProductEditHandlerInterface {
  Handle(command: ProductEditCommand): Promise<string>;
}

export default ProductEditHandlerInterface;
