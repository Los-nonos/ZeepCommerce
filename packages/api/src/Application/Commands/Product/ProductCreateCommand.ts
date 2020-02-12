class ProductCreateCommand {

  private name: string;
  private description: string;
  private basePrice: number;
  private tax: number;
  private costPrice: number;
  private margin: number;


  constructor(
    name: string,
    description: string, 
    basePrice: number, 
    tax: number, 
    costPrice: number, 
    margin: number) {

    this.name = name;
    this.description = description;
    this.basePrice = basePrice;
    this.tax = tax;
    this.costPrice = costPrice;
    this.margin = margin
  }

  public getName(): string {
    return this.name;
  }

  public getDescription(): string {
    return this.description;
  }

  public getBasePrice(): number {
    return this.basePrice;
  }

  public getTax(): number {
    return this.tax;
  }

  public getCostPrice(): number {
    return this.costPrice;
  }

  public getMargin(): number {
    return this.margin;
  }
  
}

export default ProductCreateCommand;
