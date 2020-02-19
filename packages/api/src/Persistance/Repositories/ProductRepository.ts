import IProductRepository from '../../Domain/Interfaces/IProductRepository';
import { Repository, getRepository } from 'typeorm';
import Product from '../../Domain/Entities/Product';
import { EntityNotFound } from '../../Infraestructure/Errors/EntityNotFound';

class ProductRepository implements IProductRepository {
  private readonly repository: Repository<Product>;
  constructor() {
    this.repository = getRepository(Product);
  }
  public async FindById(id: number): Promise<Product> {
    const product = await this.repository.findOne({ relations: ['categories'], where: { Id: id } });

    if (!product) {
      throw new EntityNotFound(`Product with id ${id} not found`);
    }
    return product;
  }
  public async Find(params: any): Promise<Product[]> {
    return await this.repository.find({ relations: ['categories'] });
  }
  public async FindByName(name: string): Promise<Product> {
    const product = await this.repository.findOne({ relations: ['categories'], where: { name: name } });

    if (!product) {
      throw new EntityNotFound(`Product with name ${name} not found`);
    }

    return product;
  }
  Persist(product: Product): Promise<Product> {
    throw new Error('Method not implemented.');
  }
  Delete(product: Product): Promise<void> {
    throw new Error('Method not implemented.');
  }
  Update(product: Product): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
