import { injectable } from "inversify";
import { Response } from "express";
import { InfraestructureError } from "../ErrorHandler/Errors/InfraestructureError";
import { ApplicationError } from "../ErrorHandler/Errors/AppError";

@injectable()
export class ErrorHandler {
    public handle(error: Error, res: Response): void{
        if(error instanceof InfraestructureError){
            res.status(error.getStatusCode()).send(error.message);
        }else if(error instanceof ApplicationError){
            res.status(500).send('Internal server error');
        }
    }
}
