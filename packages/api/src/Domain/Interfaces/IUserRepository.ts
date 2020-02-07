import User from "../Entities/User";

export default interface IUserRepository {
    FindById(id: number): Promise<User>;
    Find(params: any): Promise<User[]>;
    FindByName(name: string): Promise<User>
    Persist(user: User): Promise<User>;
    Delete(user: User): Promise<void>;
    Update(user: User): Promise<void>;
}
