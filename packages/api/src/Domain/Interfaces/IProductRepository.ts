import Product from '../Entities/Product';

export default interface IProductRepository {
  FindById(id: number): Promise<Product>;
  Find(params: any): Promise<Product[]>;
  FindByName(name: string): Promise<Product>;
  Persist(product: Product): Promise<Product>;
  Delete(product: Product): Promise<void>;
  Update(product: Product): Promise<void>;
}
