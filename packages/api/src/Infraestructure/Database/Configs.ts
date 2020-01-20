import { createConnection } from "typeorm";
import User from "../../Domain/Entity/User";
import Product from "../../Domain/Entity/Product";
import Role from "../../Domain/Entity/Role";

export async function createConnectionDB() {
  await createConnection({
    type: "mysql",
    host: process.env.HOST_DB,
    port: 3306,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DB,
    synchronize: true,
    logging: true,
    entities: [User, Product, Role]
  });
}
