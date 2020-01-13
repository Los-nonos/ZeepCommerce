class ProductCreateAndEditCommand{

    private id: number;
    private name: string;
    private price: number;
    private description: string;

    constructor(id: number, name: string, price: number, description: string){
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description
    }

    public getId(): number {
        return this.id;
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

export default ProductCreateAndEditCommand;