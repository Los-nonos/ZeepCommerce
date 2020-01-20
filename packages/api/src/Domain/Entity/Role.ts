import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany
} from "typeorm";
import User from "./User";

@Entity()
class Role extends BaseEntity {
  @PrimaryGeneratedColumn()
  public Id!: number;

  @Column()
  public Name: string;

  @Column()
  public Role: string;

  @ManyToMany(users => User)
  public users: User[];
}

export default Role;
