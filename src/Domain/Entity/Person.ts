class Person {

    public Id: number;
    public Name: string;
    public LastName: string;
    public Dni: number;
    public Email: string;

    constructor() {

    }

    setId(Id: number): void {
        this.Id = Id;
    }

    getId():number{
        return this.Id;
    }

    setName(Name: string): void {
        this.Name = Name;
    }

    getName():string{
        return this.Name;
    }

    setLastName(LastName: string): void {
        this.LastName = LastName;
    }

    getLastName():string{
        return this.LastName;
    }

    setDni(Dni: number): void {
        this.Dni = Dni;
    }

    getDni():number{
        return this.Dni;
    }

    setEmail(Email: string): void {
        this.Email = Email;
    }

    getEmail():string{
        return this.Email;
    }
}

export default Person;