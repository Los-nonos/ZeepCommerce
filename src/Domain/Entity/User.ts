import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity()
class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    public Id: number;

    @Column()
    public name: string;
    
    @Column()
    public lastname: string;
}

export default User;