import { injectable } from "inversify";

@injectable()
class ProductCreateCommand{

    private name: string;
    private price: number;
    private description: string;

    constructor(name: string, price: number, description: string){
        this.name = name;
        this.price = price;
        this.description = description
    }

    public getName(): string {
        return this.name;
    }

    public getPrice(): number {
        return this.price;
    }

    public getDescription(): string {
        return this.description;
    }

}

export default ProductCreateCommand;