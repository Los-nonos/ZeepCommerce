import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany } from 'typeorm';
import Role from './Role';
import * as bcrypt from 'bcryptjs';

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public lastname: string;

  @Column({nullable: true})
  public dni: number;

  @Column({nullable: true})
  userAge: number;

  @Column({nullable: true})
  userBirthYear: number;

  @Column()
  password: string;

  @Column({nullable: true})
  userPhoneNumber: number;

  @Column({nullable: true})
  userCellphoneNumber: number;

  @Column({nullable: true})
  userPhoneAreaCode: number;

  @Column({nullable: true})
  userCity: string;

  @Column({nullable: true})
  userState: string;

  @Column({nullable: true})
  userCountry: string;

  @Column()
  blocked: boolean;

  @Column({nullable: true})
  userEmail: string;

  @ManyToMany(_roles => Role)
  @JoinTable()
  public roles: Role[];

  public checkIfUnencryptedPasswordIsValid(unencryptedPassword: string): boolean {
    return bcrypt.compareSync(unencryptedPassword, this.password);
  }

  public getRolesFromUserRole(){
    const roles = [];
    for (const userRole of this.roles) {
      roles.push(userRole.Name);
    }
    return roles;
  }
}

export default User;
