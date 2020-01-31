import { createConnection } from 'typeorm';
import User from '../../Domain/Entities/User';
import Product from '../../Domain/Entities/Product';
import Role from '../../Domain/Entities/Role';

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
