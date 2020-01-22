class UserFindCommand{
    
    private Id: number;

    public constructor(idSearchedUser : number){
        this.Id = idSearchedUser;
    }

    getId(): number{
        return this.Id;
    }
}

export default UserFindCommand;