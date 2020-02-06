import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import Category from '../Entities/Category';

@Entity()
class Product extends BaseEntity {

  @PrimaryGeneratedColumn()
  public Id: number;

  @Column()
  public name: string;

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

  //@ManyToMany(category => category.products)
  @ManyToMany(_type => Category)
  @JoinTable()
  categories: Category[];
}

export default Product;
