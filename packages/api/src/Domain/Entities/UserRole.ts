import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
class UserRole {
  @PrimaryGeneratedColumn()
  public Id!: number;
  @Column()
  public Name: string;
}

export default UserRole;
