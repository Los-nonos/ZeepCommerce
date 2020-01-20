import ProductCreateCommand from "./ProductCreateCommand";

class ProductEditCommand extends ProductCreateCommand {
  private id: number;

  constructor(id: number, name: string, price: number, description: string) {
    super(name, price, description);
    this.id = id;
  }

  public getId(): number {
    return this.id;
  }
}

export default ProductEditCommand;
