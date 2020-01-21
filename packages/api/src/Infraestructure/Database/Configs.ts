import { createConnection } from "typeorm";
import User from "../../Domain/Entity/User";
import Product from "../../Domain/Entity/Product";
import Role from "../../Domain/Entity/Role";

export async function createConnectionDB() {
  await createConnection({
    type: "mysql",
    host: 'mysql',
    port: 3307,
    username: 'root',
    password: 'camp123',
    database: 'coderscamp_db',
    synchronize: true,
    logging: true,
    entities: [User, Product, Role]
  });
}
