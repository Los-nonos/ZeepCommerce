import { Response, NextFunction } from "express";

class AuthenticationMiddleware{
    public Comprobate(req: Request, res: Response, next: NextFunction){
        const {authorization}: any = req.["token"];
        
    }
}

export default AuthenticationMiddleware;