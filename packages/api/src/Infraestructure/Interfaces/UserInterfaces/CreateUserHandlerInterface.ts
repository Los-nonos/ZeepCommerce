import UserCreateCommand from '../../../Domain/Commands/UserCommands/UserCreateCommand';

interface UserCreateInterface {
  Create(command: UserCreateCommand): Promise<string>;
}

export default UserCreateInterface;
