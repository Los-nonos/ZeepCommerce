import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';
// import Role from './Role';

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  public Id: number;

  @Column()
  public name: string;

  @Column()
  public lastname: string;

  @Column()
  public dni: number;

  @Column()
  userAge: number;

  @Column()
  userBirthYear: number;

  @Column()
  userPassword: string;

  @Column()
  userPhoneNumber: number;

  @Column()
  userCellphoneNumber: number;

  @Column()
  userPhoneAreaCode: number;

  @Column()
  userCity: string;

  @Column()
  userState: string;

  @Column()
  userCountry: string;

  @Column()
  userEmail: string;

  //@ManyToMany(roles => Role)
  //@JoinTable()
  //public roles: Role[];

  //public HasRole(name: string) {
  //  return this.roles.map((role) => {
  //      return role.Name === name;
  //});
  //}
}

export default User;
