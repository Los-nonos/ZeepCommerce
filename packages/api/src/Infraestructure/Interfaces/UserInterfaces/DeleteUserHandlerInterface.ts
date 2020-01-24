import DeleteUserCommand from '../../../Domain/Commands/UserCommands/DeleteUserCommand';

interface DeleteUserHandlerInterface {
  Delete(): Promise<string>;
}

export default DeleteUserHandlerInterface;
