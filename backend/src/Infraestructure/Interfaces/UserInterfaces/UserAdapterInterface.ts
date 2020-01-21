import UserCreateCommand from "../../../Domain/Commands/UserCommands/UserCreateCommand";
import EditUserCommand from "../../../Domain/Commands/UserCommands/EditUserCommand";
import DeleteUserCommand from "../../../Domain/Commands/UserCommands/DeleteUserCommand";
import UserFindCommand from "../../../Domain/Commands/UserCommands/UserFindCommand";
import {Request} from 'express';

interface UserAdapterInterface{
    Create(req: Request): Promise<UserCreateCommand>;
    Edit(req: Request): Promise<EditUserCommand>;
    Delete(req: Request) : Promise<DeleteUserCommand>;
    ShowById(req: Request) : Promise<UserFindCommand>;
    ShowAllUsers(req: Request): Promise<UserFindCommand>;
}

export default UserAdapterInterface;