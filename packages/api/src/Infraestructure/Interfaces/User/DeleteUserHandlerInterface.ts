import DeleteUserCommand from '../../../Application/Commands/User/DeleteUserCommand';

interface DeleteUserHandlerInterface {
  Delete(command: DeleteUserCommand): Promise<string>;
}

export default DeleteUserHandlerInterface;
