import DeleteUserCommand from '../../../Domain/Commands/UserCommands/DeleteUserCommand';

interface DeleteUserHandlerInterface {
  Delete(command: DeleteUserCommand): Promise<string>;
}

export default DeleteUserHandlerInterface;
