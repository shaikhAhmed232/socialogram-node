class CustomError extends Error {
    declare code: number;

    constructor(message: string, code: number) {
        super();
        this.message = message; 
        this.code = code;
    }
};

export default CustomError;