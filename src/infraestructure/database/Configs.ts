import {createConnection} from 'typeorm';
import User from '../../domain/Entity/User';
import Product from '../../domain/Entity/Product'


export async function createConnectionDB(){
    await createConnection({
    type: "mysql",
    host: process.env.host_DB,
    port: 3306,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DB,
    synchronize: true,
    logging: true,
    entities: [User, Product]
    });
};