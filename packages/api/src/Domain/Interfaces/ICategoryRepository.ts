import Category from "../Entities/Category";

interface ICategoryRepository{

    FindAll(params: any): Promise <Category[]>;
    FindById(id: number): Promise <Category>;
    FindByName(name: string): Promise <Category>;
    Create(entity: Category): Promise <Category>;
    Update(entity: Category): Promise <void>;
    Delete(entity: Category): Promise <void>

}

export default ICategoryRepository;