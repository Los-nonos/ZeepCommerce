//Dependencies imports
import { Request, Response } from 'express';
import { injectable, inject } from 'inversify';
import TYPES from '../../Infraestructure/types';
//Error imports
import { InfraestructureError } from '../../API/Http/Errors/InfraestructureError';
import { ApplicationError } from '../../API/Http/Errors/AppError';

//Interfaces
import UserControllerInterface from '../../Infraestructure/Interfaces/UserControllerInterface';
import CreateUserHandlerInterface from '../../Infraestructure/Interfaces/UserInterfaces/CreateUserHandlerInterface';
import EditUserHandlerInterface from '../../Infraestructure/Interfaces/UserInterfaces/EditUserHandlerInterface';
import DeleteUserHandlerInterface from '../../Infraestructure/Interfaces/UserInterfaces/DeleteUserHandlerInterface';
import FindUserHandlerInterface from '../../Infraestructure/Interfaces/UserInterfaces/FindUserHandlerInterface';
import UserCreateCommand from '../../Domain/Commands/UserCommands/UserCreateCommand';
import UserAdapterInterface from '../../Infraestructure/Interfaces/UserInterfaces/UserAdapterInterface';
import User from '../../Domain/Entities/User';
import EditUserCommand from '../../Domain/Commands/UserCommands/EditUserCommand';
import DeleteUserCommand from '../../Domain/Commands/UserCommands/DeleteUserCommand';
import UserFindCommand from '../../Domain/Commands/UserCommands/UserFindCommand';
import { NotFoundData } from '../../API/Http/Errors/NotFoundData';
import FindAllUsersHandlerInterface from '../../Infraestructure/Interfaces/UserInterfaces/FindAllUsersHandlerInterface';
import FindAllUsersCommand from '../../Domain/Commands/UserCommands/FindAllUsersCommand';

@injectable()
class UserController implements UserControllerInterface {
  private ICreateUserHandler: CreateUserHandlerInterface;
  private IEditUserHandler: EditUserHandlerInterface;
  private IDeleteUserHandler: DeleteUserHandlerInterface;
  private IFindUserHandler: FindUserHandlerInterface;
  private IFindAllUsersHandler: FindAllUsersHandlerInterface;
  private IUserAdapter: UserAdapterInterface;

  constructor(
    @inject(TYPES.ICreateUserHandler) createUserHandler: CreateUserHandlerInterface,
    @inject(TYPES.IEditUserHandler) editUserHandler: EditUserHandlerInterface,
    @inject(TYPES.IDeleteUserHandler) deleteUserHandler: DeleteUserHandlerInterface,
    @inject(TYPES.IFindUserHandler) findUserHandler: FindUserHandlerInterface,
    @inject(TYPES.IFindAllUsersHandler) findAllUsersHandler: FindAllUsersHandlerInterface,
    @inject(TYPES.IUserAdapter) userAdapter: UserAdapterInterface,
  ) {
    this.ICreateUserHandler = createUserHandler;
    this.IEditUserHandler = editUserHandler;
    this.IDeleteUserHandler = deleteUserHandler;
    this.IFindUserHandler = findUserHandler;
    this.IFindAllUsersHandler = findAllUsersHandler;
    this.IUserAdapter = userAdapter;
  }

  public Create = async (req: Request, res: Response) => {
    try {
      const command: UserCreateCommand = await this.IUserAdapter.Create(req);
      const response: string = await this.ICreateUserHandler.Create(command);

      res.status(201).json({ message: response });
    } catch (error) {
      if (error instanceof InfraestructureError) {
        res.status(error.getStatusCode()).json({ message: error.message });
      } else if (error instanceof ApplicationError) {
        res.status(500).json({ message: error.getDescription });
      } else {
        res.status(500).json({ message: 'Unexpected error' });
      }
    }
  };

  public Edit = async (req: Request, res: Response) => {
    try {
      const command: EditUserCommand = await this.IUserAdapter.Edit(req);
      const response: User = await this.IEditUserHandler.Edit(command);
      res.status(200).json({ message: 'User updated correctly', user: response });
    } catch (error) {
      if (error instanceof InfraestructureError) {
        res.status(error.getStatusCode()).json({ message: error.message });
      } else if (error instanceof ApplicationError) {
        res.status(500).json({ message: error.getDescription });
      } else {
        res.status(500).json({ message: 'Unexpected error' });
      }
    }
  };

  public Delete = async (req: Request, res: Response) => {
    try {
      const command: DeleteUserCommand = await this.IUserAdapter.Delete(req);
      const response: string = await this.IDeleteUserHandler.Delete(command);
      res.status(200).json({ message: response });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  public ShowOne = async (req: Request, res: Response) => {
    try {
      const command: UserFindCommand = await this.IUserAdapter.ShowById(req);

      const response: User = await this.IFindUserHandler.FindUser(command);

      res.status(200).json({ message: 'User found', user: response });
    } catch (error) {
      if (error instanceof InfraestructureError) {
        res.status(error.getStatusCode()).json({ message: error.message });
      } else if (error instanceof ApplicationError) {
        res.status(500).json({ message: error.getDescription });
      } else {
        res.status(500).json({ message: 'Unexpected error' });
      }
    }
  };

  public ShowAll = async (req: Request, res: Response) => {
    try {
      const command: FindAllUsersCommand = await this.IUserAdapter.ShowAllUsers(req);
      const response: User[] = await this.IFindAllUsersHandler.FindAllUsers(command);
      res.status(200).json({ message: 'Users in database', user: response });
    } catch (error) {
      if (error instanceof InfraestructureError) {
        res.status(error.getStatusCode()).json({ message: error.message });
      } else if (error instanceof ApplicationError) {
        res.status(500).json({ message: error.getDescription });
      } else if (error instanceof NotFoundData) {
        res.status(404).json({ message: error.getStatusCode });
      } else {
        res.status(500).json({ message: 'Unexpected error' });
      }
    }
  };
}

export default UserController;
