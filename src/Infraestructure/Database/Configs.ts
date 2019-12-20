import {createConnection} from 'typeorm';
import User from '../../Domain/Entity/User';
import Product from '../../Domain/Entity/Product'


export async function createConnectionDB(){
    await createConnection({
    type: "mysql",
    host: 'localhost',
    port: 3306,
    username: 'coders',
    password: 'camp123',
    database: 'coderscamp_db',
    synchronize: true,
    logging: true,
    entities: [User, Product]
    });
};