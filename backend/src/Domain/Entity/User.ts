import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import Role from './Role';


@Entity()
class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    public Id: number;

    @Column()
    public name: string;

    @Column()
    public lastname: string;

    @Column()
    public dni : number;
    
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