import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  public Id: number;

  @Column()
  public name: string;

  @Column()
  public price: number;

  @Column()
  public description: string;
}

export default Product;
