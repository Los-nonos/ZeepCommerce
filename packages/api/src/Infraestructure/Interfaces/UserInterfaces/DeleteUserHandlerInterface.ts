import DeleteUserCommand from '../../../Domain/Commands/User/DeleteUserCommand';

interface DeleteUserHandlerInterface {
  Delete(command: DeleteUserCommand): Promise<string>;
}

export default DeleteUserHandlerInterface;
