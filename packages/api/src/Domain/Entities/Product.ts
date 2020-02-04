import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';
import Category from '../Entities/Category';

@Entity()
class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  public Id: number;

  @Column()
  public name: string;

  @Column()
  public category: Category;

  @Column()
  public description: string;

  @Column()
  public basePrice: number;

  @Column()
  public tax: number;

  @Column()
  public costPrice: number;

  @Column()
  public margin: number;

  @Column()
  public salePrice: number;
}

export default Product;
