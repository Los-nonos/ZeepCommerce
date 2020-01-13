class ShowUsercommand{
    
    private Id: number;

    public constructor(idSearchedUser : number){
        this.Id = idSearchedUser;
    }

    GetId(): number{
        return this.Id;
    }
}

export default ShowUsercommand;