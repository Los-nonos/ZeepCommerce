class UserAdm{

    //atributos
    private UserName: string;

    //constructor de clase
    constructor(){

    }

    /*
    constructor(Id: number, Name: string, Surname: string, UserName: string){
        super(Id,Name,Surname);
        this._UserName = UserName;
    }
    */

    //metodos getters y setters
    public setUserName(UserName : string) {
        this.UserName = UserName;
    }
    
    
    public getUserName() : string {
        return this.UserName;
    }
    
}


 