import ICategoryRepository from "../../Domain/Interfaces/ICategoryRepository";
import { Repository, getRepository } from "typeorm";
import Category from "../../Domain/Entities/Category";
import { id } from "inversify";
import { EntityNotFound } from "../../API/Http/Errors/EntityNotFound";

class CategoryRepository implements ICategoryRepository{

    private repository: Repository<Category>;

    constructor(){
        this.repository = getRepository(Category);
    }

    public async FindAll(): Promise <Category[]>{
        return await this.repository.find();
    }

    public async FindById(id: number): Promise <Category> {
        return await this.repository.findOne({id: id});
    }

    public async FindByName(name: string): Promise <Category> {
        return await this.repository.findOne({name: name});
    }

    public async Create(entity: Category): Promise <Category> {
        return await this.repository.save(entity);
    }

    public async Update(entity: Category): Promise <void> {
        const categoryResult = await this.repository.update({id: entity.id}, entity);

        if(!categoryResult.affected) {
            throw new EntityNotFound('');
        }
    }

    public async Delete(entity: Category): Promise <void> {
        const categoryResult = await this.repository.delete(entity);
        
        if(!categoryResult) {
            throw new EntityNotFound('');
        }
    }
}

export default CategoryRepository;