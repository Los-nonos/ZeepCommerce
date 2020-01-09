import { Request } from "express";
import NameSchema from "./Schemas/NameSchema";
import DniSchema from "./Schemas/DniSchema";

class UserAdapter {

    public Created(req: Request) {
        const { name, lastname, dni, age, borndate, phone, address, account }: any = req.body;

        const resultName = NameSchema.validate({ name: name });

        if (resultName.error) {
            throw new Error(resultName.error.message);
        }
        
        const resultLastName = NameSchema.validate({ name: lastname });

        if (resultLastName.error) {
            throw new Error(resultLastName.error.message);
        }

        const resultDNI = DniSchema.validate({dni: dni});

        if (resultDNI.error){
            throw new Error(resultDNI.error.message);
        }



    }

    public Edit(req: Request) {

    }

    public Delete(req: Request) {

    }
}

export default UserAdapter;