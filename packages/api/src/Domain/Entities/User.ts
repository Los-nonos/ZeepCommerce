import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import UserRole from './UserRole';

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  public Id: number;

  @Column()
  public Name: string;

  @Column()
  public Lastname: string;

  @Column({ nullable: true })
  public Dni: number;

  @Column({ nullable: true })
  Age: number;

  @Column({ nullable: true })
  BirthYear: number;

  @Column()
  Password: string;

  @Column({ nullable: true })
  PhoneNumber: number;

  @Column({ nullable: true })
  CellphoneNumber: number;

  @Column({ nullable: true })
  PhoneAreaCode: number;

  @Column({ nullable: true })
  City: string;

  @Column({ nullable: true })
  State: string;

  @Column({ nullable: true })
  Country: string;

  @Column()
  Blocked: boolean;

  @Column()
  Email: string;

  @ManyToMany(_roles => UserRole)
  @JoinTable()
  public Roles: UserRole[];

  public checkIfUnencryptedPasswordIsValid(unencryptedPassword: string): boolean {
    return bcrypt.compareSync(unencryptedPassword, this.Password);
  }

  public getRolesFromUserRole() {
    const roles = [];
    for (const userRole of this.Roles) {
      roles.push(userRole.Name);
    }
    return roles;
  }

  public hashPassword(newPassword: string): void {
    this.Password = bcrypt.hashSync(newPassword, 8);
  }
}

export default User;
