import CategoryCreateCommand from '../Category/CategoryCreateCommand';

class CategoryEditCommand extends CategoryCreateCommand{

    private id: number;

    constructor(
        id: number, name: string, description: string){

        super(name, description);
        this.id = id;
    }

    public getId(): number { 
        return this.id;
    }
}

export default CategoryEditCommand;