import {Entity, BaseEntity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
class Category extends BaseEntity{

    @PrimaryGeneratedColumn()
    public Id: number;

    @Column()
    public name: string;

    @Column()
    public description: string;
}

export default Category;