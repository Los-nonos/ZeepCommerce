import { createConnection } from 'typeorm';
import User from '../../Domain/Entity/User';
import Product from '../../Domain/Entity/Product';
import Role from '../../Domain/Entity/Role';

export async function createConnectionDB() {
  await createConnection({
    type: 'mysql',
    host: process.env.HOST_DB || 'mysql',
    port: 3307,
    username: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD || 'camp123',
    database: process.env.DATABASE_DB || 'coderscamp_db',
    synchronize: true,
    logging: true,
    entities: [User, Product, Role],
  });
}
