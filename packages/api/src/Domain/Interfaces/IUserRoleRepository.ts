import UserRole from '../Entities/UserRole';

export default interface IUserRoleRepository {
  FindById(id: number): Promise<UserRole>;
  Find(params: any): Promise<UserRole[]>;
  Persist(t: UserRole): Promise<UserRole>;
  Update(t: UserRole): Promise<void>;
  Delete(t: UserRole): Promise<void>;
}
