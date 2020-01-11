import { InfraestructureError } from "./InfraestructureError";

export class SessionInvalid extends InfraestructureError{
    public constructor(message: string){
        super(message, 403);
    }
}