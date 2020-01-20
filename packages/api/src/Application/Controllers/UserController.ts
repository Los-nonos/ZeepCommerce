//Dependencies imports
import { Request, Response } from "express";
import { injectable } from "inversify";

//Error imports
import { InfraestructureError } from "../../Infraestructure/ErrorsHandlers/Errors/InfraestructureError";
import { ApplicationError } from "../../Infraestructure/ErrorsHandlers/Errors/AppError";

//User imports
import UserControllerInterface from "../../Infraestructure/Interfaces/UserControllerInterface";
import UserCreateHandler from "../../Domain/Handlers/User/UserCreateHandler";
import UserEditHandler from "../../Domain/Handlers/User/UserEditHandler";
import UserDeleteHandler from "../../Domain/Handlers/User/UserDeleteHandler";
import UserShowHandler from "../../Domain/Handlers/User/UserFindHandler";
import UserAdapter from "../Adapters/UserAdapter";

@injectable()
class UserController implements UserControllerInterface {
  public async Create(req: Request, res: Response) {
    const adapter = new UserAdapter();
    const handler = new UserCreateHandler();

    try {
      const command = await adapter.Create(req);
      const response = await handler.Create(command);

      res.status(201).json({ message: response });
    } catch (error) {
      if (error instanceof InfraestructureError) {
        res.status(error.getStatusCode()).json({ message: error.message });
      } else if (error instanceof ApplicationError) {
        res.status(500).json({ message: error.getDescription });
      } else {
        res.status(500).json({ message: "Unexpected error" });
      }
    }
  }

  public async Edit(req: Request, res: Response) {
    const adapter = new UserAdapter();
    const handler = new UserEditHandler();

    try {
      const command = await adapter.Edit(req);
      const response = await handler.Edit(command);
      res
        .status(200)
        .json({ message: "User updated correctly", user: response });
    } catch (error) {
      if (error instanceof InfraestructureError) {
        res.status(error.getStatusCode()).json({ message: error.message });
      } else if (error instanceof ApplicationError) {
        res.status(500).json({ message: error.getDescription });
      } else {
        res.status(500).json({ message: "Unexpected error" });
      }
    }
  }

  public async Delete(req: Request, res: Response) {
    const adapter = new UserAdapter();
    const handler = new UserDeleteHandler();

    try {
      const command = await adapter.Delete(req);

      const response = await handler.Delete(command);
      res.status(200).json({ message: response });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  public async ShowOne(req: Request, res: Response) {
    const adapter = new UserAdapter();
    const handler = new UserShowHandler();

    try {
      const command = await adapter.Show(req);
      const response = await handler.FindUser(command);

      res.status(200).json({ message: "User found", user: response });
    } catch (error) {
      if (error instanceof InfraestructureError) {
        res.status(error.getStatusCode()).json({ message: error.message });
      } else if (error instanceof ApplicationError) {
        res.status(500).json({ message: error.getDescription });
      } else {
        res.status(500).json({ message: "Unexpected error" });
      }
    }
  }
}

export default UserController;
