import User from "../../Entity/User";
import UserCreatedHandlerInterface from "../../../Infraestructure/Interfaces/UserCreatedHandlerInterface";

class UserCreateHandler implements UserCreatedHandlerInterface {

    public async Create(command: any): Promise<void> {
        const { name, lastname, dni, age, borndate, phone, address, account }: any = command;

        const user = new User();
        user.name = name;
        user.lastname = lastname;

        await user.save();
    }

}

export default UserCreateHandler;