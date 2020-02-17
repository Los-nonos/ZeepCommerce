import ProductCreateCommand from './ProductCreateCommand';

class ProductEditCommand extends ProductCreateCommand {
  private id: number;

  constructor(id: number, description: string, basePrice: number, tax: number, costPrice: number, margin: number) {
    super(name, description, basePrice, tax, costPrice, margin);

    this.id = id;
  }

  public getId(): number {
    return this.id;
  }
}

export default ProductEditCommand;
