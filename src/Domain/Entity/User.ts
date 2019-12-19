import Person from "./Person";

class User{

    public Name: string;
    public UserName: string;

    constructor(){

    }

    /*
    constructor(Id: number, Name: string, Surname: string){
        super(Id,Name,Surname);
    }
    */

    setUserName(UserName: string):void{
        this.UserName = UserName;
    }

    getUserName():string{
        return this.UserName;
    }
}

export default User;