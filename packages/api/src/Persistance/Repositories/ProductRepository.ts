import IProductRepository from '../../Domain/Interfaces/IProductRepository';
import { Repository, getRepository } from 'typeorm';
import Product from '../../Domain/Entities/Product';
import { EntityNotFound } from '../../Infraestructure/Errors/EntityNotFound';
import { DataBaseError } from '../../Infraestructure/Errors/DataBaseError';

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
  public async Persist(product: Product): Promise<Product> {
    try {
      return await this.repository.save(product);
    } catch {
      throw new DataBaseError(`Product not saved, failed db`);
    }
  }
  public async Delete(product: Product): Promise<void> {
    try {
      const result = await this.repository.delete(product);

      if (!(result && result.affected === 1)) {
        throw new Error();
      }
    } catch {
      throw new DataBaseError(`Can not delete product`);
    }
  }
  public async Update(product: Product): Promise<void> {
    try {
      await this.repository.update({ Id: product.Id }, product);
    } catch {
      throw new DataBaseError(`Product not saved, failed db`);
    }
  }
}
