import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import Product from './Product';

@Entity()
class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'varchar', length: 30, unique: true })
  public name: string;

  @Column({ type: 'text', nullable: true })
  public description: string;

  //@ManyToMany(product => product.categories)
  @ManyToMany(_type => Product)
  @JoinTable()
  products: Product[];
}

export default Category;
