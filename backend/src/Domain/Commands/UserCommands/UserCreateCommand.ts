class UserCreateCommand {
    private userName: string;
    private userLastName: string;
    private userDni: number;
    

    public constructor(userName: string, userLastName: string, userDni: number) {
        this.userName = userName;
        this.userLastName = userLastName;
        this.userDni = userDni;
    }
    public getUserName() {
        return this.userName;
    }

    public getUserLastName() {
        return this.userLastName;
    }
    public getUserDni() {
        return this.userDni;
    }
}
export default UserCreateCommand;