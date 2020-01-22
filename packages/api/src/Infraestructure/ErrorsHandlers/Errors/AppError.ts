import { BaseError } from "./BaseError";

export class ApplicationError extends BaseError {
    protected description: string;

    constructor(message: string | object, description: string) {
        super(message);
        this.description = description;
    }

    getDescription(): string {
        return this.description;
    }
}