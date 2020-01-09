class InfraestructureError extends Error {

    private StatusCode: number;

    constructor(message: string, code: number) {
        super(message);
        this.StatusCode = code;
    }

    public getStatusCode(): number {
        return this.StatusCode;
    }

}

export default InfraestructureError;