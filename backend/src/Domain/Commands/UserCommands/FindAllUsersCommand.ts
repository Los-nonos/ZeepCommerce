class FindAllUsersCommand{

    private id: number;
     
    constructor(id : number){
        this.id = id;
    }

    getUsers(){
        return this.id;
    }
}
export default FindAllUsersCommand;