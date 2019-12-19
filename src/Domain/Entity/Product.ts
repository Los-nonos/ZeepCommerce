class Product {

    public Name: string;
    public Price: number;
    public Description: string;

    constructor() {

    }

    setName(Name: string): void {
        this.Name = Name;
    }

    getName(): string {
        return this.Name;
    }

    setPrice(Price: number): void {
        this.Price = Price;
    }

    getPrice(): number {
        return this.Price;
    }

    setDescription(Description: string): void {
        this.Description = Description;
    }

    getDescription(): string {
        return this.Description;
    }
}

export default Product;